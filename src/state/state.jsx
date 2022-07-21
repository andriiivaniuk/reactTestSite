import { applyMiddleware, createStore, legacy_createStore } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import localStorageMiddleware from "./middleware/localStorageMiddleWare";

const initialState = {}

export const store = legacy_createStore(
    reducers,
    composeWithDevTools(applyMiddleware(localStorageMiddleware))

);

export default store;

