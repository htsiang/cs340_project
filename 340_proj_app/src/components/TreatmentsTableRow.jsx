import React from 'react';
import '../App.css';

function TreatmentsTableRow({ treatment }){
    return (
        <tr>
            <td className='columns'>{treatment.treatmentId}</td>
            <td className='columns'>{treatment.name}</td>
            <td className='columns'>{treatment.duration}</td>
            <td className='columns'>{treatment.cost}</td>
            <td className='columns'>{treatment.description}</td>
        </tr>
    )
}

export default TreatmentsTableRow;