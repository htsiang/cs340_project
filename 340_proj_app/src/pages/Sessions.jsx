import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import SessionsTable from '../components/SessionsTable';

function Sessions({ backendURL, setSessionToEdit }){
    const [sessions, setSessions] = useState([]);
    
    const loadSessions = async () => {
        const response = await fetch(backendURL + '/sessions');
        const data = await response.json();
        setSessions(data.sessions);
    }

    useEffect(() => {
        loadSessions();
    }, []);

    const navigate = useNavigate();

    const onDelete = async (sessionId) => {
        console.log(sessionId);
        const response = await fetch(`${backendURL}/sessions/${sessionId}`, { method: 'DELETE' });
        if (response.status === 204) {
            loadSessions();
        } else {
            console.error(`Failed to delete movie with id = ${sessionId}, status code = ${response.status}`);
        }
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