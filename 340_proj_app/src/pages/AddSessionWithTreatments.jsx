import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddSessionsHasTreatments() {
    const [email, setEmail] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [sessionDate, setSessionDate] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionCost, setSessionCost] = useState('');

    const navigate = useNavigate();

    const cancelAdd = () => {
        navigate('/');
    }

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
            <h2>Add Session with Treatment Details</h2>
            <form className='form'>
                <fieldset>
                    <legend>Add Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Trainer's Email:</span>
                        <select value={email} onChange={handleEmailChange}>
                            {emailOptions.map((emailOption) => (
                                <option key={emailOption.id} value={emailOption.email}>
                                    {emailOption.label}
                                </option> 
                            ))}
                        </select>
                    </label>
                    <br></br>
                    <label className='form-field'><span className='label'>Pokemon</span>
                        <select value={pokemon} onChange={handlePokemonChange}>
                            {pokemonOptions.map((pokemonOption) => (
                                <option key={pokemonOption.id} value={pokemonOption.id}>
                                    {pokemonOption.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br></br>
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
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddSessionsHasTreatments;