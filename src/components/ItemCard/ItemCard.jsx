import React, { Component } from 'react';
import "./ItemCard.css"
import starPic from "./ItemCardRes/star-icon.png";
import likePic from "./ItemCardRes/like-icon.png";
import scalesPic from "./ItemCardRes/scales-icon.png";
import cartPic from "./ItemCardRes/cart-icon.png";

export function ItemCard (props){
    
    return(
        <div className='item-card'>
            <div className='card-pic-wrapper'> 
                {props.item.name &&
                    <img className='card-pic-img' src={props.item.pictures[0]} alt="" />
                }    
            </div>
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
            {props.item.name ?
                <div className='info-set__review-set'>
                    <div className='rating'>
                        {getRating(props.item.rating)}
                    </div>
                
                    <span className='info-set__item'>
                        {props.item.reviews}
                    </span>
                </div> : false
            }
            <div className='line'></div>
            <div className='price-set'>
                <span className='price'>
                    {props.item.price}
                </span>
                <div className='set__pics-set'>
                    <img className='pics-set-pic' src={likePic} alt="" />
                    <img className='pics-set-pic'src={scalesPic} alt="" />
                </div>
            </div>
            <button className='card__add-to-cart-but'>
                Add to cart
                <img src={cartPic} className = "cart-pic" alt="" />
            </button>
        </div>
    )
}

export default ItemCard;

const getRating = (num) => {

    let element = [];

    for(let i = 0; i < num; i++){
        element.push(<img alt = "star" src={starPic} key = {Math.random()}/>);
    }

    return element;
}