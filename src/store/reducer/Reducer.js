import {GET_STATUS_ERROR, GET_STATUS_LOADING, GET_STATUS_SUCCESS} from "../Allactions.types";


const initialState = {
    loading: false,
    error: false,
    status: {}
}

export const Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_STATUS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_STATUS_SUCCESS: {
            return {
                ...state,
                status : payload,
                loading: false,
                error: false
            }
        }
        case GET_STATUS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,                
            }
        }
        default: {
            return state;
        }
    }

}