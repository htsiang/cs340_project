import React from 'react';
import '../App.css';
import TreatmentsTableRow from './TreatmentsTableRow';

function TreatmentsTable({ treatments }){

    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>ID</th>
                    <th className='columns'>name</th>
                    <th className='columns'>duration</th>
                    <th className='columns'>cost</th>
                    <th className='columns'>description</th>
                </tr>
            </thead>
            <tbody>
                {treatments.map((treatment, i) => <TreatmentsTableRow treatment={treatment} key={i} />)}
            </tbody>
        </table>
    )
}

export default TreatmentsTable;