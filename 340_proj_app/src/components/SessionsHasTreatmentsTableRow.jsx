import React from 'react';
import '../App.css';

function SessionsHasTreatmentsTableRow({ detail }){
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
            <td className='columns'>{detail.sessionId}</td>
            <td className='columns'>{detail.treatmentId}</td>
            <td className='columns'>{detail.firstName}</td>
            <td className='columns'>{detail.lastName}</td>
            <td className='columns'>{detail.nickname}</td>
            <td className='columns'>{detail.pokemonType}</td>
            <td className='columns'>{detail.species}</td>
            <td className='columns'>{dateOnly(detail.dateCol)}</td>
            <td className='columns'>{timeConverter(detail.dateCol, detail.timeCol)}</td>
            <td className='columns'>{detail.treatmentName}</td>
            <td className='columns'>{detail.treatmentDuration}</td>
        </tr>
    )
}

export default SessionsHasTreatmentsTableRow;