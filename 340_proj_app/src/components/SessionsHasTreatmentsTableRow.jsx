import React from 'react';
import '../App.css';

function SessionsHasTreatmentsTableRow({ detail }){
    return (
        <tr>
            <td className='columns'>{detail.sessionId}</td>
            <td className='columns'>{detail.treatmentId}</td>
            <td className='columns'>{detail.firstName}</td>
            <td className='columns'>{detail.lastName}</td>
            <td className='columns'>{detail.nickname}</td>
            <td className='columns'>{detail.pokemonType}</td>
            <td className='columns'>{detail.species}</td>
            <td className='columns'>{detail.dateCol}</td>
            <td className='columns'>{detail.timeCol}</td>
            <td className='columns'>{detail.treatmentName}</td>
            <td className='columns'>{detail.treatmentDuration}</td>
        </tr>
    )
}

export default SessionsHasTreatmentsTableRow;