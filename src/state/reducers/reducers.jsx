export const basketReducer = (store = {}, action) => {
    
    switch (action.type) {
        case "SET_BASKET" :
            console.log("current basket state: ");
            console.log({...store, ...action.payload});
            return {...store,  ...action.payload}
            
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
