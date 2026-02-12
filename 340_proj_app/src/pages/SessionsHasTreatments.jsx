import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import SessionsHasTreatmentsTable from '../components/SessionsHasTreatmentsTable';

function SessionsHasTreatments(){
    const [sessionsHasTreatments, setSessionsHasTreatments] = useState([]);

    return (
        <div>
            <h2>SessionsHasTreatments</h2>
            <SessionsHasTreatmentsTable details={sessionsHasTreatments} />
        </div>
    )
}

export default SessionsHasTreatments;