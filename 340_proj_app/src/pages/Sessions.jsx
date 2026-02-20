import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import SessionsTable from '../components/SessionsTable';

function Sessions({ setSessionToEdit }){
    const [sessions, setSessions] = useState([]);

    const navigate = useNavigate();

    const onDelete = async (sessionId) => {
        console.log(sessionId);
        alert("Future functionality will be added to delete this row.");
    }

    const onEdit = (session) => {
        setSessionToEdit(session);
        navigate('/updateSession');
    }

    return (
        <div>
            <h2>Sessions</h2>
            <SessionsTable sessions={sessions} onDelete={onDelete} onEdit={onEdit} />
        </div>
    )
}

export default Sessions;