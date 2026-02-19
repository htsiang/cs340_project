import React from 'react';
import '../App.css';
import TreatmentsTableRow from './TreatmentsTableRow';

function TreatmentsTable({ treatments }){
    treatments = [{
        treatmentId: 1,
        name: "Body Massage",
        duration: 30,
        cost: 15.00,
        description: "Swedish massage techniques are applied to the surface/skin of your Pokemon. Pressure is applied to encourage relaxation. Must be a species-applicable Pokemon."
    },
    {
        treatmentId: 2,
        name: "Heated Therapy",
        duration: 60,
        cost: 25.00,
        description: "Warm towels are applied to the body of your Pokemon. If applicable, a paste that heats up on the skin is also included that soothes and rejuvenates sore muscles."
    },
    {
        treatmentId: 3,
        name: "Wash and Soak",
        duration: 90,
        cost: 45.00,
        description: "Species-appropriate soaps are used to wash dirt and grime away. Pokemon are offered hot springs or species-appropriate baths with salts to soak in for the remainder of their time."
    }]

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