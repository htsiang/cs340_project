import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

    useEffect(() => {
        const loadTrainers = async () => {
            const response = await fetch(backendURL + '/trainers');
            const data = await response.json();
            setTrainers(data.trainers);
            setEmail(data.trainers[0].email);
        }
        const loadAllPokemon = async () => {
            const response = await fetch(backendURL + '/pokemon');
            const data = await response.json();
            setAllPokemon(data.pokemon);
            const trainerPokemon = data.pokemon.filter(p => p.firstName === data.trainers[0].firstName && p.lastName === data.trainers[0].lastName);
            setPokemon(trainerPokemon[0].nickname);
        }
        loadTrainers();
        loadAllPokemon();
    }, [backendURL]);

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
            <h2>Add Session with Treatment Details</h2>
            <form className='form'>
                <fieldset>
                    <legend>Add Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Trainer's Email:</span>
                        <select value={email} onChange={handleEmailChange}>
                            {trainers.map((trainer) => (
                                <option key={trainer.id} value={trainer.email}>
                                    {trainer.email}
                                </option>
                            ))}
                        </select>
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
                    {treatments.map((treatment, i) => <SingleTreatmentCheckbox treatment={treatment} key={i}/>)}
                </fieldset>
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddSessionsHasTreatments;