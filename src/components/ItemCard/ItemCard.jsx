import React from 'react';
import "./ItemCard.css"
import starPic from "./ItemCardRes/star-icon.png";
import likePic from "./ItemCardRes/like-icon.png";
import scalesPic from "./ItemCardRes/scales-icon.png";
import cartPic from "./ItemCardRes/cart-icon.png";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { actionCreators } from '../../state';
import { setBasket, addProductToBasket, deleteProductFromBasket } from '../../state/action-creators';


export function ItemCard (props){
    
    const dispatch = useDispatch();

    return(
        <div  className='item-card'>
            <Link className='card-pic-wrapper'  to={`/products/${props.item.id}`}> 
                {props.item.name &&
                    <img className='card-pic-img' src={props.item.pictures[0]} alt="" />
                }    
            </Link>
            <span className='card-name'>
                {props.item.name}
            </span>
            <div className='card__info-set'>
                <span className='info-set__item'>
                    {props.item.cultivar}
                </span>

                <span className='info-set__item'>
                    {props.item.country}
                </span>
            </div>
                <div className='info-set__review-set'>
                    <div className='rating'>
                        {getRating(props.item.rating)}
                    </div>
                
                    <span className='info-set__item'>
                        {props.item.reviews}
                    </span>
                </div>
            <div className='line'></div>
            <div className='price-set'>
                <span className='price'>
                    {props.item.price} $
                </span>
                <div className='set__pics-set'>
                    <img className='pics-set-pic' src={likePic} alt="" />
                    <img className='pics-set-pic'src={scalesPic} alt="" />
                </div>
            </div>
            <button className='card__add-to-cart-but' onClick={() => addItemToStorage(props.item.id, dispatch)}>
                Add to cart
                <img src={cartPic} className = "cart-pic" alt="" />
            </button>
        </div> 
    )
}

export default ItemCard;

const addItemToStorage = (id, dispatchFunc) => {
    dispatchFunc(addProductToBasket(id));
}

const getRating = (num) => {

    let element = [];

    for(let i = 0; i < num; i++){
        element.push(<img alt = "star" src={starPic} key = {Math.random()}/>);
    }

    return element;
}