import { FETCH, LOADING_FETCH, REFRESH } from '../actionTypes'
import Axios from 'axios'

const loading = (status) => {
    return dispatch => {
        dispatch({
            type : LOADING_FETCH,
            status
        })
    }
}

export const fetch = () => {
    return (dispatch) => {
        dispatch(loading(true))        
        Axios({
            method : 'get',
            url : 'https://api.pokemontcg.io/v1/cards'
        })
        .then( ({data}) => {
            dispatch(loading(false))
            dispatch({
                type : FETCH,
                pokemon : data.cards
            })
        })
        .catch( err => {
            console.log('masuk error' , err)
        })
    }
}

export const refresh = () => {
    return (dispatch) => {
        dispatch({ 
            type : REFRESH
         })
    }
}

export const search = (queryParams) => {
    return (dispatch) => {
        dispatch(loading(true))        
        Axios({
            method : 'get',
            url : `https://api.pokemontcg.io/v1/cards?name=${queryParams}`
        })
        .then( ({data}) => {
            dispatch(loading(false))
            dispatch({
                type : FETCH,
                pokemon : data.cards
            })
        })
        .catch( err => {
            console.log('masuk error' , err)
        })
    }
}


