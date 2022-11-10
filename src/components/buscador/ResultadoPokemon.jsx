import React from "react";
import { useSelector } from "react-redux";

const ResultadoPokemon = () => {

    const BuscadorPokemon = useSelector((state)=> state.BuscadorPokemon);

    return(
        <div className='row justify-content-center'>
          <div className='col-6 align-self-center'>
            {BuscadorPokemon.pokemon.length >= 1 && 
            <h3 className="text-white mt-4 text-center" >{BuscadorPokemon.pokemon[0].name.toUpperCase()}</h3>}
            <div className='card mt-6 mx-0' style={{height: '400px'}}>
              {BuscadorPokemon.loading && 
                <img src={require("../../img/loading.png")} alt="aca va a ir un loading"/>}
              {BuscadorPokemon.pokemon.length >= 1 && 
                <img className="mx-1 d-block" src={BuscadorPokemon.pokemon[0].sprites.front_default} alt='Poke'/>}
              {BuscadorPokemon.error !== '' &&
                <>
                    <img className="mx-1 d-block" src={require("../../img/not_found.gif")} style={{height: '400px'}} alt='Poke' />
                    <h3 className="text-white mt-4 text-center">{BuscadorPokemon.error}</h3>
                </>
              }
            </div>
          </div>
        </div>
    );

}

export default ResultadoPokemon