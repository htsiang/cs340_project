import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import SessionsHasTreatmentsTable from '../components/SessionsHasTreatmentsTable';

function SessionsHasTreatments({ backendURL }){
    const [sessionsHasTreatments, setSessionsHasTreatments] = useState([]);
    
    const loadSessionsHasTreatments = async () => {
        const response = await fetch(backendURL + '/sessionsHasTreatments');
        const data = await response.json();
        setSessionsHasTreatments(data.sessionsHasTreatments);
    }

    useEffect(() => {
        loadSessionsHasTreatments();
    }, []);

    return (
        <div>
            <h2>SessionsHasTreatments</h2>
            <SessionsHasTreatmentsTable details={sessionsHasTreatments} />
        </div>
    )
}

export default SessionsHasTreatments;