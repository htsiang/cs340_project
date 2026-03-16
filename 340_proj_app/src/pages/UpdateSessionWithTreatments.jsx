import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UpdateSessionWithTreatments({ backendURL, sessionToEdit }) {
    const [sessionDate, setSessionDate] = useState(sessionToEdit.dateCol.split('T')[0]);
    const [sessionTime, setSessionTime] = useState(sessionToEdit.timeCol);
    const [sessionCost, setSessionCost] = useState(sessionToEdit.cost);
    const [sessionTreatments, setSessionTreatments] = useState([]);
    const [selectedTreatments, setSelectedTreatments] = useState([]);
    const [treatments, setTreatments] = useState([]);

    console.log(sessionToEdit);

    const loadTreatments = async () => {
        const response1 = await fetch(backendURL + '/treatments');
        const data1 = await response1.json();
        console.log(data1);
        setTreatments(data1.treatments);

        const response2 = await fetch(backendURL + '/sessionsHasTreatments/' + sessionToEdit.sessionId);
        const data2 = await response2.json();
        console.log(data2);
        const treatmentArr = data2.sessionsHasTreatments.map(x => (x.treatmentId));
        setSessionTreatments(treatmentArr);
        setSelectedTreatments([...treatmentArr]);
    }

    useEffect(() => {
        loadTreatments();
    }, []);

    const navigate = useNavigate();

    const cancelUpdate = () => {
        navigate('/sessions');
    }

    const handleTreatmentChange = (event) => {
        const { value , checked } = event.target;

        if (checked) {
            setSelectedTreatments([... selectedTreatments, parseInt(value)]);
        } else {
            setSelectedTreatments(selectedTreatments.filter((treatment) => treatment !== parseInt(value)));
        }
    };

    const updateSessionWithTreatments = async (e) => {
        e.preventDefault();

        const treatmentsToDelete = sessionTreatments.filter(t => !selectedTreatments.includes(t));
        const treatmentsToAdd = selectedTreatments.filter(t => !sessionTreatments.includes(t));
        const updatedSession = {"sessionId": sessionToEdit.sessionId, sessionDate, sessionTime, sessionCost, treatmentsToAdd, treatmentsToDelete};

        console.log(updatedSession);

        const response = await fetch(backendURL + '/session', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSession)
        });

        if (!response.ok) {
            console.error("Error:", await response.text());
            alert("Update failed.")
        } else {
            navigate('/sessions');
        }
    }

    return (
        <div>
            <h2>Edit Session with Treatment Details</h2>
            <h4>For Trainer: {sessionToEdit.firstName} {sessionToEdit.lastName}</h4>
            <h4>For Pokemon: {sessionToEdit.nickname}</h4>
            <form className='form'>
                <fieldset>
                    <legend>Edit Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Session Date:</span>
                        <input type='date' placeholder="YYYY-MM-DD" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
                    </label>
                    <br></br>
                    <label className='form-field'><span className='label'>Session Time:</span>
                        <input type='time' placeholder="00:00" value={sessionTime} onChange={e => setSessionTime(e.target.value)} />
                    </label>
                    <br></br>
                    <label className='form-field'><span className='label'>Cost:</span>
                        <input type='text' placeholder="Cost" value={sessionCost} onChange={e => setSessionCost(e.target.value)} />
                    </label>
                    {treatments.map((treatment) => (<label><input type="checkbox" value={treatment.treatmentId} checked={selectedTreatments.includes(treatment.treatmentId)} onChange={handleTreatmentChange}/>{treatment.name}</label>))}
                </fieldset>
                <button onClick={updateSessionWithTreatments}>Update</button>
                <button onClick={cancelUpdate}>Cancel</button>
            </form>
        </div>
    )
}

export default UpdateSessionWithTreatments;