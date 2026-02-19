import React from 'react';
import '../App.css';
import SessionsHasTreatmentsTableRow from './SessionsHasTreatmentsTableRow';

function SessionsHasTreatmentsTable({ details }){
    details = [{
        sessionId: 1,
        treatmentId: 1,
        firstName: "Ash",
        lastName: "Ketchum",
        nickname: "Pikachu",
        pokemonType: "Electric",
        species: "Pikachu",
        dateCol: "02-01-2025",
        timeCol: "13:00:00",
        treatmentName: "Body Massage",
        treatmentDuration: 30
    },{
        sessionId: 3,
        treatmentId: 1,
        firstName: "Brock",
        lastName: "Takeshi",
        nickname: "Bronix",
        pokemonType: "Rock",
        species: "Onix",
        dateCol: "12-20-2025",
        timeCol: "11:00:00",
        treatmentName: "Body Massage",
        treatmentDuration: 30
    },{
        sessionId: 1,
        treatmentId: 2,
        firstName: "Ash",
        lastName: "Ketchum",
        nickname: "Pikachu",
        pokemonType: "Electric",
        species: "Pikachu",
        dateCol: "02-01-2025",
        timeCol: "13:00:00",
        treatmentName: "Heated Therapy",
        treatmentDuration: 60
    },{
        sessionId: 3,
        treatmentId: 2,
        firstName: "Brock",
        lastName: "Takeshi",
        nickname: "Bronix",
        pokemonType: "Rock",
        species: "Onix",
        dateCol: "12-20-2025",
        timeCol: "11:00:00",
        treatmentName: "Heated Therapy",
        treatmentDuration: 60
    },{
        sessionId: 1,
        treatmentId: 3,
        firstName: "Ash",
        lastName: "Ketchum",
        nickname: "Pikachu",
        pokemonType: "Electric",
        species: "Pikachu",
        dateCol: "02-01-2025",
        timeCol: "13:00:00",
        treatmentName: "Wash and Soak",
        treatmentDuration: 90
    },{
        sessionId: 2,
        treatmentId: 3,
        firstName: "ASh",
        lastName: "Ketchum",
        nickname: "Charizard",
        pokemonType: "Fire",
        species: "Charizard",
        dateCol: "03-03-2025",
        timeCol: "14:30:00",
        treatmentName: "Wash and Soak",
        treatmentDuration: 90
    }]

    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>session ID</th>
                    <th className='columns'>treatment ID</th>
                    <th className='columns'>trainer first name</th>
                    <th className='columns'>trainer last name</th>
                    <th className='columns'>pokemon nickname</th>
                    <th className='columns'>pokemon type</th>
                    <th className='columns'>species</th>
                    <th className='columns'>session date</th>
                    <th className='columns'>session time</th>
                    <th className='columns'>treatment name</th>
                    <th className='columns'>treatment duration</th>
                </tr>
            </thead>
            <tbody>
                {details.map((detail, i) => <SessionsHasTreatmentsTableRow detail={detail} key={i} />)}
            </tbody>
        </table>
    )
}

export default SessionsHasTreatmentsTable;