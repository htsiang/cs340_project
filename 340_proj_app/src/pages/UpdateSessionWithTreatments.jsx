import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UpdateSessionWithTreatments({ sessionToEdit }) {
    const [sessionDate, setSessionDate] = useState(sessionToEdit.dateCol);
    const [sessionTime, setSessionTime] = useState(sessionToEdit.timeCol);
    const [sessionCost, setSessionCost] = useState(sessionToEdit.cost);

    console.log(sessionToEdit);

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePokemonChange = (event) => {
        setPokemon(event.target.value);
    }

    const emailOptions = []; // get emails from database
    const pokemonOptions = []; // get pokemon from database

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
                </fieldset>
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateSessionWithTreatments;