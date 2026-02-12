import React from 'react';
import '../App.css';

function PokemonTableRow({ pokemon }){
    return (
        <tr>
            <td className='columns'>{pokemon.pokemonId}</td>
            <td className='columns'>{pokemon.nickname}</td>
            <td className='columns'>{pokemon.firstName}</td>
            <td className='columns'>{pokemon.lastName}</td>
            <td className='columns'>{pokemon.pokemonType}</td>
            <td className='columns'>{pokemon.species}</td>
            <td className='columns'>{pokemon.notes}</td>
        </tr>
    )
}

export default PokemonTableRow;