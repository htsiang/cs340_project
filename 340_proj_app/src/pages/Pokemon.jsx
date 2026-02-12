import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import PokemonTable from '../components/PokemonTable';

function Pokemon(){
    const [pokemon, setPokemon] = useState([]);

    return (
        <div>
            <h2>Pokemon</h2>
            <PokemonTable pokemon={pokemon}/>
        </div>
    )
}

export default Pokemon;