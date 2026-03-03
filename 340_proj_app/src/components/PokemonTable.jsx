import React from 'react';
import '../App.css';
import PokemonTableRow from './PokemonTableRow';

function PokemonTable({ pokemon }){

    return (
        <table className='table'>
            <caption></caption>
            <thead>
                <tr>
                    <th className='columns'>ID</th>
                    <th className='columns'>nickname</th>
                    <th className='columns'>trainer first name</th>
                    <th className='columns'>trainer last name</th>
                    <th className='columns'>pokemon type</th>
                    <th className='columns'>species</th>
                    <th className='columns'>notes</th>
                </tr>
            </thead>
            <tbody>
                {pokemon.map((pokemon, i) => <PokemonTableRow pokemon={pokemon} key={i} />)}
            </tbody>
        </table>
    )
}

export default PokemonTable;