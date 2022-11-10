import { FETCH_POKE_ERROR,
        FETCH_POKE_REQUEST,
        FETCH_POKE_SUCCESS } from "../actions/buscadorAction";

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const BuscadorPokemon = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKE_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FETCH_POKE_ERROR:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}

export default BuscadorPokemon