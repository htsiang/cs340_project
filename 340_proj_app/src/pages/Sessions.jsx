import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import SessionsTable from '../components/SessionsTable';

function Sessions(){
    const [sessions, setSessions] = useState([]);

    return (
        <div>
            <h2>Sessions</h2>
            <SessionsTable sessions={sessions} />
        </div>
    )
}

export default Sessions;