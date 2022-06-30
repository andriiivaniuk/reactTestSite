import React, { useState } from "react";
import withLoader from "../../hocs/withLoader/withLoader";
import "./Basket.css"
import { useEffect } from "react";

export const BasketList = ({products, currentBasket}) => {

    if(!products) {
        return null;
    }

    const [basket, setBasket] = useState(currentBasket);
    console.log(basket);

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
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    const deleteItem = (id) => {
        let oldBasket = currentBasket;
        delete oldBasket[id];

        localStorage.setItem("basket", JSON.stringify(oldBasket));
        setBasket(Object.assign({}, oldBasket));
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
        </div>
        </>
    )
}

export default withLoader(BasketList);