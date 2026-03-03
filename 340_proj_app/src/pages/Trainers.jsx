import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import TrainersTable from '../components/TrainersTable';

function Trainers({ backendURL }){
    const [trainers, setTrainers] = useState([]);

    const loadTrainers = async () => {
        const response = await fetch(backendURL + '/trainers');
        const data = await response.json();
        setTrainers(data.trainers);
    }

    useEffect(() => {
        loadTrainers();
    }, []);

    return (
        <div>
            <h2>Trainers</h2>
            <TrainersTable trainers={trainers} />
        </div>
    )
}

export default Trainers;