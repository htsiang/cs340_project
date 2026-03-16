import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import '../App.css';

function AddSessionsHasTreatments({ backendURL }) {
    const [trainers, setTrainers] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [trainerPokemon, setTrainerPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [sessionDate, setSessionDate] = useState('');
    const [sessionTime, setSessionTime] = useState('');
    const [sessionCost, setSessionCost] = useState('');
    const [treatments, setTreatments] = useState([]);
    const [selectedTreatments, setSelectedTreatments] = useState([]);

    const [errors, setErrors] = useState({});

    const loadTrainers = async () => {
        const response = await fetch(backendURL + '/trainers');
        const data = await response.json();
        console.log(data);
        setTrainers(data.trainers.map((x) => ({value: x.trainerId, label: x.email, firstName: x.firstName, lastName: x.lastName})));
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
        navigate('/sessions');
    }

    const handleTrainerChange = (newVal, actionMeta) => {
        console.log(newVal);
        setSelectedTrainer(newVal);

        // This also recalculates automatically whenever selected trainer changes.
        // included else to reset the field otherwise
        if (newVal) {
            setTrainerPokemon(allPokemon.filter(p => p.trainerId===newVal.value));
        } else {
            setTrainerPokemon(allPokemon);
        }
    };

    const handlePokemonChange = (event) => {
        setSelectedPokemon(event.target.value);
    }

    const handleTreatmentChange = (event) => {
        const { value , checked } = event.target;

        if (checked) {
            setSelectedTreatments([... selectedTreatments, parseInt(value)]);
        } else {
            setSelectedTreatments(selectedTreatments.filter((treatment) => treatment !== parseInt(value)));
        }
    };

    // calculate total cost based on check boxes
    useEffect(() => {
        const totalCost = treatments
            .filter(t => selectedTreatments.includes(t.treatmentId))
            .reduce((sum, t) => sum + (Number(t.cost) || 0), 0);
        setSessionCost(totalCost.toFixed(2));
    }, [selectedTreatments, treatments]);

    const addSessionWithTreatments = async (e) => {
        e.preventDefault();

        // errors if missing a required field
        const newErrors = {};
        if (!selectedTrainer) newErrors.trainer = "Please select a trainer.";
        if (!selectedPokemon) newErrors.pokemon = "Please select a Pokémon.";
        if (!sessionDate) newErrors.date = "Please pick a session date.";
        if (!sessionTime) newErrors.time = "Please pick a session time.";
        // render error text for cost right after checkbox placement in fieldset
        if (selectedTreatments.length === 0) newErrors.treatments = "Requires at least 1 treatment.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const newSession = {selectedTrainer, selectedPokemon, sessionDate, sessionTime, sessionCost, selectedTreatments};
        console.log(newSession);

        const response = await fetch(backendURL + "/sessionWithTreatments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSession)
        });

        if (!response.ok) {
            alert("Add failed.")
        } else {
            navigate('/sessions');
        }
    }

    return (
        <div>
            <h2>Add Session with Treatment Details</h2>
            <form className='form' onSubmit={addSessionWithTreatments}>
                <fieldset>
                    <legend>Add Session with Treatment Details</legend>
                    <label className='form-field'><span className='label'>Trainer's Email:</span>
                        <Select isSearchable={true} isSelectable={true} options={trainers} onChange={handleTrainerChange}></Select>
                    </label>
                    {errors.trainer && <p style={{color:"red"}}>{errors.trainer}</p>}
                    <br></br>
                    <label className='form-field'><span className='label'>Pokemon</span>
                        <select onChange={handlePokemonChange}>
                            <option value="">
                                Choose a Pokemon...
                            </option>
                            {trainerPokemon.map((pokemon) => (
                                <option key={pokemon.pokemonId} value={pokemon.pokemonId}>
                                    {pokemon.nickname}
                                </option>
                            ))}
                        </select>
                    </label>
                    {errors.pokemon && <p style={{color:"red"}}>{errors.pokemon}</p>}
                    <br></br>
                    <label className='form-field'><span className='label'>Session Date:</span>
                        <input type='date' placeholder="YYYY-MM-DD" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
                    </label>
                    {errors.date && <p style={{color:"red"}}>{errors.date}</p>}
                    <br></br>
                    <label className='form-field'><span className='label'>Session Time:</span>
                        <input type='time' placeholder="00:00" value={sessionTime} onChange={e => setSessionTime(e.target.value)} />
                    </label>
                    {errors.time && <p style={{color:"red"}}>{errors.time}</p>}
                    <br></br>
                    <label className='form-field'><span className='label'>Cost:</span>
                        <input type='text' placeholder="Cost" value={sessionCost} readOnly />
                    </label>
                    {treatments.map((treatment) => (
                        <label key={treatment.treatmentId}><input type="checkbox" value={treatment.treatmentId} checked={selectedTreatments.includes(treatment.treatmentId)} onChange={handleTreatmentChange}/>{treatment.name}</label>
                    ))}
                    {errors.treatments && <p style={{color:"red"}}>{errors.treatments}</p>}
                </fieldset>
                <button type='submit' style={{ marginRight: "10px" }}>Create</button>
                <button onClick={cancelAdd}>Cancel</button>
            </form>
        </div>
    )
}

export default AddSessionsHasTreatments;
