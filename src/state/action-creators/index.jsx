export const addProductToBasket = (productId) => {
    return {
            type: "ADD_PRODUCT",
            payload: productId
        }
    }

export const deleteProductFromBasket = (productId) => {
    return {
            type: "DELETE_PRODUCT",
            payload: productId
        }
}

export const setBasket = (basket) => {
    return {
            type: "SET_BASKET",
            payload: basket
        }
}