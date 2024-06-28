import React from 'react';
import classes from './PokemonList.module.sass';
import Pokemon from '../pokemon/Pokemon';


const PokemonList = ({ pokemonList, handleShow }) => {
    return (
        <li className={classes.list}>
            {
                pokemonList.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} handleShow={handleShow}/>)
            }
        </li>
    );
};

export default PokemonList;
