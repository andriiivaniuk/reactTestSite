import React from "react";
import "./Basket.css"
import withLoader from "../../hocs/withLoader/withLoader";
import BasketList from "./BasketList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { actionCreators } from "../../state";

export const Basket = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [currentBasket, setCurrentBasket] = useState({});
    const stateBasket = useSelector(state => state.basket);

    const dispatch = useDispatch();
    

    useEffect(() => {
        fetchBasketItems();
    }, []);

    const fetchBasketItems = async () => {

        let basketObj = stateBasket;

        if(Object.keys(basketObj).length === 0) {
            basketObj = JSON.parse(localStorage.getItem("basket"));
        } 
        setLoading(true);

        let basketKeys;
        if(Object.keys(basketObj).length !== 0){
            basketKeys = Object.keys(basketObj);
        } else {
            basketKeys = [];
        }
        
        let products = [];

        try {
            for (let i = 0; i < basketKeys.length; i++) {

                let productPromise = await fetch(`http://localhost:3100/items/${basketKeys[i]}`);
                if (productPromise.ok) {

                    let product = await productPromise.json();
                    products.push(product);
                }
            }

            setProducts(products);
            // dispatch(actionCreators.setBasket(currentBasket));
            
        }
        catch {
            alert("error while fetching products");
        }
        finally {
            setLoading(false);
            // console.log(products);
        }
    } 

    return(
    <div className="basket">
        <h1 className="basket-title">
            Registering the order
        </h1>
        <BasketList products={products} loading={loading} ></BasketList>
    </div>
    )
}

export default Basket;