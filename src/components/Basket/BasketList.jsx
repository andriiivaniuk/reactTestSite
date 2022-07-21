import React, { useState } from "react";
import withLoader from "../../hocs/withLoader/withLoader";
import "./Basket.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { substractProductInBasket, addProductToBasket, deleteProductFromBasket, setBasket } from "../../state/action-creators";


export const BasketList = ({products}) => {
    
    const [basketSum, setBasketSum] = useState(0);
    const dispatch = useDispatch();
    const [basket, setbasket] = useState({});
    const stateBasket = useSelector(state => state.basket);


    useEffect(() => {
        if(Object.keys(stateBasket).length === 0) {

            let basketObj = JSON.parse(localStorage.getItem("basket"));
            dispatch(setBasket(basketObj));
            setbasket(basketObj);
        }

        let finalSum = 0;
        let basketKeys = Object.keys(basket);

        for(let i = 0; i < basketKeys.length; i++) {
            let currentProd = products.find(elem => elem.id === basketKeys[i]);
            finalSum += (basket[basketKeys[i]] * currentProd.price);
            
        }

        setBasketSum(finalSum);

    }, [basket]);

    useEffect(() => {

        setbasket(stateBasket);
        
    }, [stateBasket]);

    const changeBasketAmount = (id, ifAdd, dispatchFunc) => {
        if (ifAdd) {
            dispatchFunc(addProductToBasket(id));
        } else {
            if(basket[id] === 1) {return;}
            dispatchFunc(substractProductInBasket(id));
        }
    }

    const deleteItem = (id, dispatchFunc) => {
        dispatchFunc(deleteProductFromBasket(id));
    }

    return(
        <>
        { (Object.keys(basket)).length === 0 &&  
        <p className="basket-empty-text">Your basket is empty :(</p> } 

        { (Object.keys(basket)).length !== 0 &&
        <div className="basket-list">
            {products.map((product, index) =>  basket[product.id] &&
                <div className="list__item" key = {Math.random()}>
                    <span className="list__num">
                        {index + 1}.
                    </span>
                    <div className="list__photo-wrapper">
                        <img className="list__photo-wrapper__img" src= {product.pictures[2]} alt="" />
                    </div>
                    <span className="list__name">
                        {product.name}
                    </span>
                    <span className="list__price">
                        ${product.price}
                    </span>
                    <div className="amount-set">
                        <button className="lower-amount" onClick={() => changeBasketAmount(product.id, false, dispatch)}>-1</button>
                        <span className="list__amount">
                            x {basket[product.id]}
                        </span>
                        <button className="upper-amount" onClick={() => changeBasketAmount(product.id, true, dispatch)} >+1</button>
                        <button className="delete-item" onClick={() => deleteItem(product.id, dispatch)} > x </button>
                    </div>
                    <span className="list__full-price">
                        ${(product.price * basket[product.id]).toFixed(2)}
                    </span>
            
                </div>
            )}

            <div className="line"></div>
            <span className="basket__final-sum">
                Final sum: ${basketSum.toFixed(2)}
            </span>
        </div>
        }
        </>
    )
}

export default withLoader(BasketList);