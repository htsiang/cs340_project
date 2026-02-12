import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import TrainersTable from '../components/TrainersTable';

function Trainers(){
    const [trainers, setTrainers] = useState([]);

    return (
        <div>
            <h2>Trainers</h2>
            <TrainersTable trainers={trainers} />
        </div>
    )
}

export default Trainers;