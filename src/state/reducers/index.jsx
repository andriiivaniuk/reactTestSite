import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer"
import filtersReducer from "./filtersReducer";

const reducers = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    filters: filtersReducer

});

export default reducers;