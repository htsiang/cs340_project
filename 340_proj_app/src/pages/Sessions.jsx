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

    const onReset = async () => {
        const response = await fetch(`${backendURL}/reset`);
        if (response.status===200){
            loadSessions();
        } else {
            console.error(`Failed to reset db. Status code = ${response.status}`);
        }
    }

    return (
        <div>
            <h2>Sessions</h2>
            <SessionsTable sessions={sessions} onDelete={onDelete} onEdit={onEdit} />

            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Sessions;