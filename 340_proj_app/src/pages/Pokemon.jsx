import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import PokemonTable from '../components/PokemonTable';

function Pokemon({ backendURL }){
    const [pokemon, setPokemon] = useState([]);

    const loadPokemon = async () => {
        const response = await fetch(backendURL + '/pokemon');
        const data = await response.json();
        setPokemon(data.pokemon);
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <div>
            <h2>Pokemon</h2>
            <PokemonTable pokemon={pokemon}/>
        </div>
    )
}

export default Pokemon;