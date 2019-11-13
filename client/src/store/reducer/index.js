import { FETCH, LOADING_FETCH, REFRESH } from '../actionTypes'

const initState = {
    pokemon: [],
    loadingFetch: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING_FETCH:
            return {
                ...state,
                loadingFetch: action.status
            }
        case FETCH:
            return { 
                ...state, 
                pokemon : action.pokemon
            }
        case REFRESH:
            return { 
                ...state, 
                pokemon: [],
                loadingFetch : false
            }
        default:
            return {
                ...state
            }
    }


}

export default reducer