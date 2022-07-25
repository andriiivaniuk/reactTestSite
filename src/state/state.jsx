import { applyMiddleware, createStore, legacy_createStore } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import localStorageMiddleware from "./middleware/localStorageMiddleWare";


const getInitialStore = () => {
    
    const newState = {
        basket: JSON.parse(localStorage.getItem("basket")),
        products: {},
        filters: {},
        priceRange: {}
    }

    return newState;
 };

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(localStorageMiddleware)),

);

export default store;

