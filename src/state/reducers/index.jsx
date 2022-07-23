import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer"

const reducers = combineReducers({
    basket: basketReducer,
    products: productsReducer

});

export default reducers;