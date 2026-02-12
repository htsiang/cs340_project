import React from 'react';
import '../App.css';
import SessionsHasTreatmentsTableRow from './SessionsHasTreatmentsTableRow';

function SessionsHasTreatmentsTable({ details }){
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