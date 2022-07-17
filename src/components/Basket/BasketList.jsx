import React, { useState } from "react";
import withLoader from "../../hocs/withLoader/withLoader";
import "./Basket.css"
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from "../../state";


export const BasketList = ({products, currentBasket}) => {

    
    const [basketSum, setBasketSum] = useState(0);
    const [basket, setBasket] = useState(currentBasket);
    const dispatch = useDispatch();
    const stateBasket = useSelector(state => state.basket);

    useEffect(() => {

        let finalSum = 0;
        const basketKeys = Object.keys(basket);

        for(let i = 0; i < basketKeys.length; i++) {
            let currentProd = products.find(elem => elem.id === basketKeys[i]);

            finalSum += (basket[basketKeys[i]] * currentProd.price);
        }

        setBasketSum(finalSum);
        // dispatch(actionCreators.setBasket(basket));
        
        
    }, [basket]);


    const changeBasketAmount = (id, ifAdd) => {
        if(!ifAdd && currentBasket[id] == 1) {
            return;
        }

        let oldBasket = currentBasket;
        let newBasket = Object.assign(
            oldBasket, {
                [id]: ifAdd ? currentBasket[id] + 1 : currentBasket[id] -1
            }
        )
        
        setBasket(Object.assign({}, newBasket));
        dispatch(actionCreators.setBasket(newBasket));
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    const deleteItem = (id) => {
        let oldBasket = currentBasket;
        console.log("old basket:")
        console.log(oldBasket)

        delete oldBasket[id];

        
        
        let newObj = {};
        Object.assign(newObj, oldBasket);

        localStorage.setItem("basket", JSON.stringify(newObj));
        dispatch( actionCreators.setBasket(newObj));
        setBasket(newObj);
        
        console.log("new basket:")
        console.log(newObj)
        
    }
    
    return(
        <>{ Object.keys(basket).length === 0 && 
            
        <p className="basket-empty-text">Your basket is empty :(</p> } 
        
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
                        <button className="lower-amount" onClick={() => changeBasketAmount(product.id, false)}>-1</button>
                        <span className="list__amount">
                            x {basket[product.id]}
                        </span>
                        <button className="upper-amount" onClick={() => changeBasketAmount(product.id, true)} >+1</button>
                        <button className="delete-item" onClick={() => deleteItem(product.id)} > x </button>
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
        </>
    )
}

export default withLoader(BasketList);