export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_BASKET = "SET_BASKET";
export const SUBSTRACT_PRODUCT = "SUBSTRACT_PRODUCT";

export const ADD_FILTER_CATEGORY = "ADD_FILTER_CATEGORY";
export const REMOVE_FILTER_CATEGORY = "REMOVE_FILTER_CATEGORY";
export const ADD_POSSIBLE_FILTER = "ADD_POSSIBLE_FILTER";

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

export const addFilterCatToState = (filterId) => {
    return {
        type: ADD_FILTER_CATEGORY,
        payload: filterId
    }
}

export const removeFilterCatFromState = (filterId) => {
    return {
        type: REMOVE_FILTER_CATEGORY,
        payload: filterId
    }
}

export const addPossibleFilter = (filterField) => {
    return {
        type: ADD_POSSIBLE_FILTER,
        payload: filterField
    }
}