import React from "react";
import withLoader from "../../hocs/withLoader/withLoader";
import "./Basket.css"

export const BasketList = ({products, currentBasket}) => {

    console.log(currentBasket);
    
    if(!products) {
        return null;
    }

    return(
        <div className="basket-list">
            {products.map((product, index) => 
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
                        <button className="lower-amount">-1</button>
                        <span className="list__amount">
                            x {currentBasket[product.id]}
                        </span>
                        <button  className="upper-amount">+1</button>
                        <button className="delete-item"> x </button>
                    </div>
                    <span className="list__full-price">
                        ${(product.price * currentBasket[product.id]).toFixed(2)}
                    </span>
            
                </div>
            )}

            <div className="line"></div>
        </div>
    )
}

export default withLoader(BasketList);