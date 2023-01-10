import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./auth/authReducer"
import { Reducer } from "./reducer/Reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  feed: Reducer
});
export const store = legacy_createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);