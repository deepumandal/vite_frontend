import axios from 'axios';
import { GET_STATUS_ERROR, GET_STATUS_LOADING, GET_STATUS_SUCCESS } from '../Allactions.types';

const api = `http://localhost:3000`

export const getstatusdataapi = (payload) => (dispatch) => {
    console.log(payload)
    dispatch({ type: GET_STATUS_LOADING })
    axios.get(api + '/getstatus'+ `?_id=${payload._id}`)
        .then(response => {
            dispatch({ type: GET_STATUS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.error(error)
            dispatch({ type: GET_STATUS_ERROR })
        })
}