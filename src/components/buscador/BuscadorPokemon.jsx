import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import fetchPoke from "../../redux/actions/buscadorAction";

const BuscadorPokemon = () => {

    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState('');

    return(
        <div className='row justify-content-center'>
          <div className='col-6'>
            <div className="input-group mb-3">
                <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} className="form-control" placeholder="Pokemon a buscar"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={ () => {
                            dispatch(fetchPoke(pokemonName));
                        }} >Buscar</button>
                </div>
            </div>
          </div>
        </div>
    );
}

export default BuscadorPokemon
