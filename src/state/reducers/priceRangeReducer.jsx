import { SET_MAX_PRICE_FILTER, SET_MIN_PRICE_FILTER } from "../action-creators";

export const priceRangeReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_MAX_PRICE_FILTER:
            return {
                ...state,
                ["max"]: action.payload.toFixed(2)
            }
        case SET_MIN_PRICE_FILTER:
            return {
                ...state,
                ["min"]: action.payload.toFixed(2)
            }    
        default:
            return state;
    }
}

export default priceRangeReducer;