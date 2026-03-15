import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import SingleTreatmentCheckbox from '../components/SingleTreatmentCheckbox';

function UpdateSessionWithTreatments({ backendURL, sessionToEdit }) {
    const [sessionDate, setSessionDate] = useState(sessionToEdit.dateCol);
    const [sessionTime, setSessionTime] = useState(sessionToEdit.timeCol);
    const [sessionCost, setSessionCost] = useState(sessionToEdit.cost);
    const [sessionTreatments, setSessionTreatments] = useState([]);
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
        setSessionTreatments(data2.sessionsHasTreatments.map(x => (x.treatmentId)));
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
                    {treatments.map((treatment) => (<label><input type="checkbox" value={treatment.treatmentId} checked={sessionTreatments.includes(treatment.treatmentId)} onChange={handleTreatmentChange}/>{treatment.name}</label>))}
                    {/* {treatments.map((treatment, i) => <SingleTreatmentCheckbox treatment={treatment} key={i}/>)} */}
                </fieldset>
                <button>Update</button>
                <button onClick={cancelUpdate}>Cancel</button>
            </form>
        </div>
    )
}

export default UpdateSessionWithTreatments;