import React from 'react';
import '../App.css';
import PokemonTableRow from './PokemonTableRow';

function PokemonTable({ pokemon }){
    pokemon = [{
        pokemonId: 1,
        nickname: "Pikachu",
        firstName: "Ash",
        lastName: "Ketchum",
        pokemonType: "Electric",
        species: "Pikachu",
        notes: "Minimize cheek contact during face massage."
    },{
        pokemonId: 2,
        nickname: "Charizard",
        firstName: "Ash",
        lastName: "Ketchum",
        pokemonType: "Fire",
        species: "Charizard",
        notes: "Does not like having tail touched."
    },{
        pokemonId: 3,
        nickname: "Psyduck",
        firstName: "Misty",
        lastName: "Kasumi",
        pokemonType: "Water",
        species: "Psyduck",
        notes: "Prone to anxiety."
    },{
        pokemonId: 4,
        nickname: "Bronix",
        firstName: "Brock",
        lastName: "Takeshi",
        pokemonType: "Rock",
        species: "Onix",
        notes: null
    }]

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