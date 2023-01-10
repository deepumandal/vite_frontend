import axios from 'axios';

import { GET_LOGIN_ERROR, GET_LOGIN_LOADING, GET_LOGIN_SUCCESS, GET_RESISTER_ERROR, GET_RESISTER_LOADING, GET_RESISTER_SUCCESS, GET_LOGOUT } from "../Allactions.types"
const api = `http://localhost:3000`

export const getresisterapi = (payload) => (dispatch) => {
    dispatch({ type: GET_RESISTER_LOADING })
    axios.post(`${api}/autn/resister`, payload)
        .then(r => {
            // dispatch({ type: GET_RESISTER_SUCCESS, payload: r.data })
            alert(r.data.massage)
        })
        .catch(err => dispatch({ type: GET_RESISTER_ERROR }))
}

export const getloginapi = (payload) => (dispatch) => {

    dispatch({ type: GET_LOGIN_LOADING })
    axios.post(`${api}/autn/login`, payload)
        .then(r => {
            dispatch({ type: GET_LOGIN_SUCCESS, payload: r.data })
            console.log(r)
            alert('login successful')
        })
        .catch(err => dispatch({ type: GET_LOGIN_ERROR }))
}

export const logoutuser = () => (dispatch) => {
    alert('logoutuser')
    dispatch({ type: GET_LOGOUT })
}