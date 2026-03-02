import React from 'react';
import '../App.css';
import TrainersTableRow from './TrainersTableRow';

function TrainersTable({ trainers }){
    /* trainers =[{
        trainerId: 1,
        firstName: "Ash",
        lastName: "Ketchum",
        email: "aketchum@pkmail.com",
        phone: "888-549-8330",
        notes: "Misty Kasumi sometimes brings in his Pokemon."
    },{
        trainerId: 2,
        firstName: "Misty",
        lastName: "Kasumi",
        email: "mkasumi@pkmail.com",
        phone: "505-224-5493",
        notes: "Water-type gym leader."
    },{
        trainerId: 3,
        firstName: "Brock",
        lastName: "Takeshi",
        email: "btakeshi@pkmail.com",
        phone: "505-980-7748",
        notes: "Rock-type gym leader."
    }] */

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