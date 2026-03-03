import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import TreatmentsTable from '../components/TreatmentsTable';

function Treatments({ backendURL }){
    const [treatments, setTreatments] = useState([]);
    
    const loadTreatments = async () => {
        const response = await fetch(backendURL + '/treatments');
        const data = await response.json();
        setTreatments(data.treatments);
    }

    useEffect(() => {
        loadTreatments();
    }, []);

    return (
        <div>
            <h2>Treatments</h2>
            <TreatmentsTable treatments={treatments} />
        </div>
    )
}

export default Treatments;