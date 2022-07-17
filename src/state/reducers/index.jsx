import { combineReducers } from "redux";
import basketReducer from "./reducers";

const reducers = combineReducers({
    basket: basketReducer
});

export default reducers;