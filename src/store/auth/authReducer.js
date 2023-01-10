import { GET_LOGIN_ERROR, GET_LOGIN_LOADING, GET_LOGIN_SUCCESS ,GET_LOGOUT} from "../Allactions.types";


const initialState = {
    loading: false,
    error: false,
    data: {
        isAuth: false,
        user: null
    }
}

export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case GET_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: {
                    isAuth: true
                    , user: payload[0]
                 }
            }
        }
        case GET_LOGOUT : {
            return {
                ...state,
                loading : false,
                error: false,
                data: {
                    isAuth: false,
                    user: null
                }
            }
        }
        default: {
            return state;
        }
    }

}