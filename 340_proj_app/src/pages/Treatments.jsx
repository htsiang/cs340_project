import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import TreatmentsTable from '../components/TreatmentsTable';

function Treatments(){
    const [treatments, setTreatments] = useState([]);

    return (
        <div>
            <h2>Treatments</h2>
            <TreatmentsTable treatments={treatments} />
        </div>
    )
}

export default Treatments;