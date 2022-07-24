export const basketReducer = (state = {}, action) => {
    
    switch (action.type) {
        case "SET_BASKET" :

            let final = { ...action.payload }
            return final;
            
        case "ADD_PRODUCT" :
            if (state.hasOwnProperty(action.payload)) {
                return { ...state, [action.payload]: state[action.payload] + 1 }
            } else {
                return { ...state, [action.payload]: 1 }
            }
        case "SUBSTRACT_PRODUCT":
            if (state[action.payload] === 1) {
                {
                    let newState = {};
                    newState = { ...state};
                    delete newState[action.payload]
                    return newState;
                }
            } else {
                return { ...state, [action.payload]: state[action.payload] - 1 }
            }
        case "DELETE_PRODUCT" : 
            let newState = {...{}, ...state};
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
}

export default basketReducer;
