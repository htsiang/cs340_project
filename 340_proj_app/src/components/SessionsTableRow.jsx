import React from 'react';
import '../App.css';
import UpdateDelete from './UpdateDelete';

function SessionsTableRow({ session, onDelete, onEdit }){
    const dateOnly = (date) => {
        if (date.includes('T')) {
            return date.split('T')[0];
        } else {
            return date;
        }
    }

    const timeConverter = (date, time) => {
        const newDate = new Date(`${dateOnly(date)}T${time}`);

        return newDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    return (
        <tr>
            <td className='columns'>{session.sessionId}</td>
            <td className='columns'>{session.nickname}</td>
            <td className='columns'>{session.firstName}</td>
            <td className='columns'>{session.lastName}</td>
            <td className='columns'>{session.pokemonType}</td>
            <td className='columns'>{session.species}</td>
            <td className='columns'>{dateOnly(session.dateCol)}</td>
            <td className='columns'>{timeConverter(session.timeCol)}</td>
            <td className='columns'>{session.cost}</td>
            <UpdateDelete className='columns' session={session} onDelete={onDelete} onEdit={onEdit}/>
        </tr>
    )
}

export default SessionsTableRow;