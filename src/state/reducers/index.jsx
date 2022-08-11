import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer"
import filtersReducer from "./filtersReducer";
import priceRangeReducer from "./priceRangeReducer";

const reducers = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    filters: filtersReducer,
    priceRange: priceRangeReducer

});

export default reducers;