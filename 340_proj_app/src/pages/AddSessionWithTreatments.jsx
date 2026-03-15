import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import '../App.css';
import SingleTreatmentCheckbox from '../components/SingleTreatmentCheckbox';

function AddSessionsHasTreatments({ backendURL }) {
    const [trainers, setTrainers] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [trainerPokemon, setTrainerPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [sessionDate, setSessionDate] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionCost, setSessionCost] = useState('');
    const [treatments, setTreatments] = useState([]);

    const loadTrainers = async () => {
        const response = await fetch(backendURL + '/trainers');
        const data = await response.json();
        console.log(data);
        setTrainers(data.trainers.map((x) => ({value: x.trainerId, label: x.email, firstName: x.firstName, lastName: x.lastName})));
        // setEmail(data.trainers[0].email);
    }

    const loadAllPokemon = async () => {
        const response = await fetch(backendURL + '/pokemon');
        const data = await response.json();
        console.log(data);
        setAllPokemon(data.pokemon);
        setTrainerPokemon(data.pokemon);
    }
    
    const loadTreatments = async () => {
        const response = await fetch(backendURL + '/treatments');
        const data = await response.json();
        console.log(data);
        setTreatments(data.treatments);
    }

    useEffect(() => {
        loadTrainers();
        loadAllPokemon();
        loadTreatments();
    }, []);

    const navigate = useNavigate();

    const cancelAdd = () => {
        navigate('/');
    }

    const handleTrainerChange = (newVal, actionMeta) => {
        console.log(newVal);
        setSelectedTrainer(newVal);

        // This also recalculates automatically whenever selected trainer changes.
        setTrainerPokemon(allPokemon.filter(p => p.trainerId===newVal.value));
    }

    const handlePokemonChange = (event) => {
        setSelectedPokemon(event.target.value);
    }

    const addSessionWithTreatments = async (e) => {
        e.preventDefault();

        const newSession = {selectedTrainer, selectedPokemon, sessionDate, sessionTime, sessionCost};
        console.log(newSession);
    }

    return (
        <div>
            <h2>Add Session with Treatment Details</h2>
            <form className='form'>
                <fieldset>
                    <legend>Add Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Trainer's Email:</span>
                        <Select isSearchable={true} isSelectable={true} options={trainers} onChange={handleTrainerChange}></Select>
                    </label>
                    <br></br>
                    <label className='form-field'><span className='label'>Pokemon</span>
                        <select value={pokemon} onChange={handlePokemonChange}>
                            {trainerPokemon.map((pokemon) => (
                                <option key={pokemon.pokemonId} value={pokemon.nickname}>
                                    {pokemon.nickname}
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