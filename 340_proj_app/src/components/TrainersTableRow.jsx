import React from 'react';
import '../App.css';

function TrainersTableRow({ trainer }){
    return (
        <tr>
            <td className='columns'>{trainer.trainerId}</td>
            <td className='columns'>{trainer.firstName}</td>
            <td className='columns'>{trainer.lastName}</td>
            <td className='columns'>{trainer.email}</td>
            <td className='columns'>{trainer.phone}</td>
            <td className='columns'>{trainer.notes}</td>
        </tr>
    )
}

export default TrainersTableRow;