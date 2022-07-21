export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_BASKET = "SET_BASKET";
export const SUBSTRACT_PRODUCT = "SUBSTRACT_PRODUCT";

export const addProductToBasket = (productId) => {
    return {
            type: ADD_PRODUCT,
            payload: productId
        }
    }

export const deleteProductFromBasket = (productId) => {
    return {
            type: DELETE_PRODUCT,
            payload: productId
        }
}

export const setBasket = (basket) => {
    return {
            type: SET_BASKET,
            payload: basket
        }
}

export const substractProductInBasket = (productId) => {
    return {
        type: SUBSTRACT_PRODUCT, 
        payload: productId
    }
}