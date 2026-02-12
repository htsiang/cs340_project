import React from 'react';
import '../App.css';

function SessionsTableRow({ sessions }){
    return (
        <tr>
            <td className='columns'>{sessions.sessionId}</td>
            <td className='columns'>{sessions.nickname}</td>
            <td className='columns'>{sessions.firstName}</td>
            <td className='columns'>{sessions.lastName}</td>
            <td className='columns'>{sessions.pokemonType}</td>
            <td className='columns'>{sessions.species}</td>
            <td className='columns'>{sessions.dateCol}</td>
            <td className='columns'>{sessions.timeCol}</td>
            <td className='columns'>{sessions.cost}</td>
        </tr>
    )
}

export default SessionsTableRow;