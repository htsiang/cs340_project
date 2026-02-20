import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import SingleTreatmentCheckbox from '../components/SingleTreatmentCheckbox';

function UpdateSessionWithTreatments({ sessionToEdit }) {
    const [sessionDate, setSessionDate] = useState(sessionToEdit.dateCol);
    const [sessionTime, setSessionTime] = useState(sessionToEdit.timeCol);
    const [sessionCost, setSessionCost] = useState(sessionToEdit.cost);

    console.log(sessionToEdit);

    const navigate = useNavigate();

    const treatments = [{
        treatmentId: 1,
        name: "Body Massage",
        duration: 30,
        cost: 15.00,
        description: "Swedish massage techniques are applied to the surface/skin of your Pokemon. Pressure is applied to encourage relaxation. Must be a species-applicable Pokemon."
    },
    {
        treatmentId: 2,
        name: "Heated Therapy",
        duration: 60,
        cost: 25.00,
        description: "Warm towels are applied to the body of your Pokemon. If applicable, a paste that heats up on the skin is also included that soothes and rejuvenates sore muscles."
    },
    {
        treatmentId: 3,
        name: "Wash and Soak",
        duration: 90,
        cost: 45.00,
        description: "Species-appropriate soaps are used to wash dirt and grime away. Pokemon are offered hot springs or species-appropriate baths with salts to soak in for the remainder of their time."
    }]

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
                    {treatments.map((treatment, i) => <SingleTreatmentCheckbox treatment={treatment} key={i}/>)}
                </fieldset>
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateSessionWithTreatments;