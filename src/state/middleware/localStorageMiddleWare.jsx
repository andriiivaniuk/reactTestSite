import { ADD_PRODUCT, SET_BASKET, DELETE_PRODUCT, SUBSTRACT_PRODUCT } from "../action-creators";

export const localStorageMiddleware = (store) => (next) => (action) =>  {

    next(action);

    if(action.type === ADD_PRODUCT) {
        let prods = localStorage.getItem("basket");

        if(prods === null || prods === undefined) {
            prods = {};
            prods[action.payload] = 1;
            localStorage.setItem("basket", JSON.stringify(prods));
            
        } else {
            prods = JSON.parse(prods);
            if(!prods.hasOwnProperty(action.payload)) {
                prods[action.payload] = 1;
            } else {
                prods[action.payload] += 1;
            }
            
        }
        
        localStorage.setItem("basket", JSON.stringify(prods));
    }

    if(action.type === SET_BASKET) {
        let prods = store.getState().basket;
        localStorage.setItem("basket", JSON.stringify(prods));
    }

    if(action.type === DELETE_PRODUCT) {
        let prods = JSON.parse(localStorage.getItem("basket"));
        delete prods[action.payload];
        localStorage.setItem("basket", JSON.stringify(prods));
    }

    if(action.type === SUBSTRACT_PRODUCT) {
        let prods = JSON.parse(localStorage.getItem("basket"));
        prods[action.payload] -= 1;
        localStorage.setItem("basket", JSON.stringify(prods));
    }
};

export default localStorageMiddleware;