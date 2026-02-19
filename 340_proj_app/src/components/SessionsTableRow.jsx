import React from 'react';
import '../App.css';
import UpdateDelete from './UpdateDelete';

function SessionsTableRow({ session, onDelete, onEdit }){
    return (
        <tr>
            <td className='columns'>{session.sessionId}</td>
            <td className='columns'>{session.nickname}</td>
            <td className='columns'>{session.firstName}</td>
            <td className='columns'>{session.lastName}</td>
            <td className='columns'>{session.pokemonType}</td>
            <td className='columns'>{session.species}</td>
            <td className='columns'>{session.dateCol}</td>
            <td className='columns'>{session.timeCol}</td>
            <td className='columns'>{session.cost}</td>
            <UpdateDelete className='columns' session={session} onDelete={onDelete} onEdit={onEdit}/>
        </tr>
    )
}

export default SessionsTableRow;