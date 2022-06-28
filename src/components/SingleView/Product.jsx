import React, {useState} from 'react';
import cartPic from "../../components/Header/HeaderRes/cart-icon.png";

import withLoader from '../../hocs/withLoader/withLoader';

import starPic from "./SingleRes/star-icon.png";
import scalesPic from "./SingleRes/scales-icon.png";
import likePic from "./SingleRes/like-icon.png";
import "./SingleView.css";

function Product({product}) {
    const [amount, setAmount] = useState(1);
    const [currentDesrTab, setDesrTab] = useState(0);
    
    const descriptionTabsConfig = [
        "Description",
        "Specifications",
        "Reviews",
        "Shipping"
    ];


    if(!product) {
        return null;
    }
    
    return(
        <section className='item'>
            <div className='item__pic-info-set'>
                <div className='pic-info-set__pic-set'>
                    {
                        product.pictures.map((photo, i) => 
                             <div key = {Math.random()} className = {i === 0 ?  'pic-set__main-image-wrapper' : "pic-set__image-wrapper"}>
                                <img key = {Math.random()} src={photo}
                                className="pic-set__img" alt="item-another-photo" /> 
                            </div> )
                    }
                </div>
                <article className='pic-info-set__info-set'>
                    <div className='info-set__title-set'>
                        <div className='title-set__title-info'>
                            <div className='title-info__title-stars-set'>
                                <span className='title-stars-set__title'>
                                    {product.name}
                                </span>
                                <div className='title-info__title-stars-set'>
                                    {getRating(product.rating) }
                                </div>
                            </div>
                            {
                                product.available ? <span className='title-set__available'>Available</span> :
                                <span className='title-set__not-available'>Not available</span>
                            }
                        </div>
                        <div className='title-set__pic-set'>
                            <div className='title-set__pic-wrapper'>
                                <img src={scalesPic} alt="add-to-compare" />
                            </div>
                            <div className='title-set__pic-wrapper'>
                                <img src={likePic} alt="add-to-fav" />
                            </div>
                        </div>
                    </div> 
                    <div className='line'></div>
                    <div className='info-set__descrition-set'>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Trademark:</span>
                            <span className='set-item__value' >{product.trademark}</span>
                        </li>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Cultivar:</span>
                            <span className='set-item__value' >{product.cultivar}</span>
                        </li>
                        <li className='description-set__item'>
                            <span className='set-item__name' >Country of Origin:</span>
                            <span className='set-item__value' >{product.country}</span>
                        </li>
                    </div>
                    <div className='line'></div>
                    <div className='info-set__options'>
                        {getOptions(product.options)}
                    </div>
                    <div className='line'></div>
                    <div className='info-set__price-area'>
                        <div className='price-area__price-bonus-set'>
                            <span className='price-bonus__price'>
                                ${product.price} <span className='price-units'>per {product.units}</span>
                            </span>
                            <span>
                            + { ((Number.parseFloat(product.price)) * 1000) / 8 } bonuses
                            </span>
                        </div>
                    </div>
                    <div className='buy-buttons-set'>
                        <div className='amount-to-buy-set'>
                            <button className='change-amount-but' onClick={() => { 
                                if(amount === 1){return}
                                    setAmount(amount - 1); 
                                }}>-</button>
                            <span className='current-amount'>{amount}</span>
                            <button className='change-amount-but' onClick={() => setAmount(amount + 1)}>+</button>
                        </div>
                        <button className='add-to-cart-but'>
                            Add to cart
                            <img className='add-to-cart__cart-pic' src = {cartPic}></img>
                        </button>
                        <button className='buy-in-one-click-but'>
                            Buy in one click
                        </button>
                    </div>
                </article>
            </div>
            <article className='item-description-tabs'>
                    {
                        <>
                        <nav className='description-tabs__tabs-titles'>
                            {descriptionTabsConfig.map( (tabName, i) => 
                                <div className='tabs__title-set' key = {Math.random()}>
                                    <span className='tabs-titles__title' key = {Math.random()} onClick={() => setDesrTab(i)} >
                                        { currentDesrTab === i ? <strong>{tabName}</strong> : <>{tabName}</> }
                                    </span>
                                    {currentDesrTab === i && <div className='title-selected-bar'></div>}
                                </div>
                            )}
                        </nav>
                        <div className='line'></div>
                        </>
                    }
                    <span className='item-description-tabs__text-container'>
                        {currentDesrTab === 0 && product.description}
                        {
                            currentDesrTab === 1 && 
                        
                            <div>
                                { Object.keys(product.specs).map( (key) => <div key={Math.random()}  className='text-container__specs-set'>
                                    <span className='text-container__spec-title'> 
                                        {key}
                                    </span>
                                    <span className='text-container__spec-text'>
                                        {product.specs[key]}
                                    </span>
                                    <div className='line'></div>
                                    </div>
                                ) }
                            </div>
                        }
                        {
                            currentDesrTab === 2 && "Reviews"
                        }
                        {
                            currentDesrTab === 3 && "Shipping"
                        }
                    </span>
            </article>
        </section>
    )

}

export default withLoader(Product);

const getRating = (num) => {

    let element = [];

    for(let i = 0; i < num; i++){
        element.push(<img src = {starPic} alt = "star" key = {Math.random()}/>);
    }

    return element;
}

const getOptions = (options) => {

    let rows = [];

    let keys = Object.keys(options);
    let values = Object.values(options);

    for(let i = 0; i < keys.length; i++){
        let item = []

        item.push (<h1 className='options-title' key = {Math.random() * 100}>{keys[i]}</h1>);
        item.push(
            <select className='options'  key = {Math.random() * 100}>
                {values[i].map(x => <option key = {Math.random() * 100}>{x}</option>)}
            </select>
        ) 

        rows.push(<div key = {Math.random()} className='info-set__options-item'>{item}</div>);
        
    }

    return  rows;
}