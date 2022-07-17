export const basketReducer = (store = {}, action) => {
    
    switch (action.type) {
        case "SET_BASKET" :
            let final = {};
            Object.assign(final, action.payload);
            return final;
            
        case "ADD_PRODUCT" :
            store.basket = {...store.basket, ...action.payload}
            break;
        case "DELETE_PRODUCT" : 
            break;

        default:
            console.log("default switch: " + action.payload);
            return store;
    }
}

export default basketReducer;
