import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import '../App.css';
import SingleTreatmentCheckbox from '../components/SingleTreatmentCheckbox';

function AddSessionsHasTreatments({ backendURL }) {
    const [trainers, setTrainers] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [email, setEmail] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [sessionDate, setSessionDate] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionCost, setSessionCost] = useState('');
    const [treatments, setTreatments] = useState([]);

    const loadTrainers = async () => {
        const response = await fetch(backendURL + '/trainers');
        const data = await response.json();
        setTrainers(data.trainers);
        console.log(trainers);
        setEmail(data.trainers[0].email);
    }

    const loadAllPokemon = async () => {
        const response = await fetch(backendURL + '/pokemon');
        const data = await response.json();
        setAllPokemon(data.pokemon);
        const trainerPokemon = data.pokemon.filter(p => p.firstName === data.trainers[0].firstName && p.lastName === data.trainers[0].lastName);
        setPokemon(trainerPokemon[0].nickname);
    }
    
    const loadTreatments = async () => {
        const response = await fetch(backendURL + '/treatments');
        const data = await response.json();
        setTreatments(data.treatments);
    }

    useEffect(() => {
        loadTrainers();
        loadAllPokemon();
        loadTreatments;
    }, []);

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

    const activeTrainer = trainers.find(t => t.email === email);

    // This also recalculates automatically whenever 'activeTrainer' or 'allPokemon' changes.
    const trainerPokemons = activeTrainer
        ? allPokemon.filter(p => p.firstName === activeTrainer.firstName && p.lastName === activeTrainer.lastName)
        : [];

    const addSessionWithTreatments = async (e) => {
        e.preventDefault();

        const newSession = {};
        console.log(newSession);
    }

    return (
        <div>
            <h2>Add Session with Treatment Details</h2>
            <form className='form'>
                <fieldset>
                    <legend>Add Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Trainer's Email:</span>
                        <Select isSearchable={true} isSelectable={true} options={trainers} onChange={handleEmailChange}></Select>
                    </label>
                    <br></br>
                    <label className='form-field'><span className='label'>Pokemon</span>
                        <select value={pokemon} onChange={handlePokemonChange}>
                            {trainerPokemons.map((trainerPokemon) => (
                                <option key={trainerPokemon.PokemonId} value={trainerPokemon.nickname}>
                                    {trainerPokemon.nickname}
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
                    {treatments.map((treatment, i) => <SingleTreatmentCheckbox treatment={treatment} key={treatment.treatmentId}/>)}
                </fieldset>
                <button onClick={addSessionWithTreatments}>Create</button>
            </form>
        </div>
    )
}

export default AddSessionsHasTreatments;