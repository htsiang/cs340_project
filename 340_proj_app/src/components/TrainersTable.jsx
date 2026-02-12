import React from 'react';
import '../App.css';
import TrainersTableRow from './TrainersTableRow';

function TrainersTable({ trainers }){
    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>ID</th>
                    <th className='columns'>first name</th>
                    <th className='columns'>last name</th>
                    <th className='columns'>email</th>
                    <th className='columns'>phone</th>
                    <th className='columns'>notes</th>
                </tr>
            </thead>
            <tbody>
                {trainers.map((trainer, i) => <TrainersTableRow trainer={trainer} key={i} />)}
            </tbody>
        </table>
    )
}

export default TrainersTable;