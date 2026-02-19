import React from 'react';
import '../App.css';
import { VscEdit, VscTrash } from "react-icons/vsc";
import SessionsTableRow from './SessionsTableRow';

function SessionsTable({ sessions, onDelete, onEdit }){
    sessions = [{
        sessionId: 1,
        nickname: "Pikachu",
        firstName: "Ash",
        lastName: "Ketchum",
        pokemonType: "Electric",
        species: "Pikachu",
        dateCol: "02-01-2025",
        timeCol: "13:00:00",
        cost: 55.00
    },{
        sessionId: 2,
        nickname: "Charizard",
        firstName: "ASh",
        lastName: "Ketchum",
        pokemonType: "Fire",
        species: "Charizard",
        dateCol: "03-03-2025",
        timeCol: "14:30:00",
        cost: 55.00
    },{
        sessionId: 3,
        nickname: "Bronix",
        firstName: "Brock",
        lastName: "Takeshi",
        pokemonType: "Rock",
        species: "Onix",
        dateCol: "12-20-2025",
        timeCol: "11:00:00",
        cost: 40.00
    }]

    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>ID</th>
                    <th className='columns'>pokemon nickname</th>
                    <th className='columns'>trainer first name</th>
                    <th className='columns'>trainer last name</th>
                    <th className='columns'>pokemon type</th>
                    <th className='columns'>pokemon species</th>
                    <th className='columns'>date</th>
                    <th className='columns'>time</th>
                    <th className='columns'>cost</th>
                    <th className='columns'>
                        <div><VscEdit /><VscTrash /></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sessions.map((session, i) => <SessionsTableRow session={session} onDelete={onDelete} onEdit={onEdit} key={i} />)}
            </tbody>
        </table>
    )
}

export default SessionsTable;