import Axios from 'axios';

//mis tipos de actions
export const FETCH_POKE_SUCCESS = 'FETCH_POKE_SUCCESS';
export const FETCH_POKE_REQUEST = 'FETCH_POKE_REQUEST';
export const FETCH_POKE_ERROR = 'FETCH_POKE_ERROR';

//actions
export const fetchPokeRequest = () => {
    return {
        type: FETCH_POKE_REQUEST
    }
}

export const fetchPokeSuccess = (Pokemon) => {
    return {
        type: FETCH_POKE_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokeError = (error) => {
    return {
        type: FETCH_POKE_ERROR,
        payload: error
    }
}

//aca hacemos la peticion a la pokeapi
const fetchPoke = (valor) => {
    return(dispatch) => {
        //informo que esta buscando hasta que responda
        dispatch(fetchPokeRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`) //hago la req
        .then(response =>
            dispatch(fetchPokeSuccess([response.data])) //si sale todo ok pasa a la accion de exito y le pasamos el poke
        ).catch(err =>
            dispatch(fetchPokeError("No se encontró el pokémon.")) //si salio algo mal, mandamos un error
        );
    }
}

//exportamos la accion de la peticion
export default fetchPoke
