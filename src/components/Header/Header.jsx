import React from 'react';
import "./Header.css";
import logo from "./HeaderRes/logo.png";
import locPic from "./HeaderRes/loc-icon.png";
import searchPic from "./HeaderRes/search-pic.svg";
import likePic from "./HeaderRes/like-icon.png";
import cartPic from "./HeaderRes/cart-icon.png";
import arrowPic from "./HeaderRes/arrow-icon.png";
import personIcon from "./HeaderRes/personal-icon.png"

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import { useEffect } from 'react';

const getItemsAmount = (currentBasket) => {
    const keys = Object.keys(currentBasket);

    let finalAmount = 0;
    for(let i = 0; i < keys.length; i++) {
        finalAmount += currentBasket[keys[i]];
    } 

    return finalAmount;
}

const getItemPriceSum = async (currentBasket, setFinalSumFunc)  => {
    let keys = Object.keys(currentBasket);
    let values = Object.values(currentBasket);

    if (keys.length === 0) {
        return;
    }

    let finalSum = 0;

    for (let i = 0; i < keys.length; i++) {
        try {
            
            let pricePromise = await fetch(`http://localhost:3100/items/${keys[i]}`);
            if (pricePromise.ok) {
               
                let obj = await pricePromise.json();
                let productSum = obj.price;
                productSum *= values[i];
                finalSum += productSum;

            }
        }
        catch {
            alert("problem fetching items for the header price")
        }
        finally{

        }
    }

    console.log(finalSum);
    setFinalSumFunc(finalSum);

}

function Header (props) {

    const [basketNum, setBasketNum] = useState(0);
    const [finalSumn, setFinalSum] = useState(0);

    const currentBasket = useSelector(state => state.basket);

    useEffect(() => {
        setBasketNum(getItemsAmount(currentBasket));
        getItemPriceSum(currentBasket, setFinalSum);
    }, [currentBasket]);

    return ( 
        <header className='header'>
            <div className='header__upper-line'>
                <div className='upper-line__set'>
                    <ul className='upper-line__info-set'>
                        <li className='info-set__item'>
                            <a href="" className='info-set__link'>
                                About Us
                            </a>
                        </li>
                        <li className='info-set__item'>
                            <a href="" className='info-set__link'>
                                Payment and Delivery
                            </a>
                        </li>
                        <li className='info-set__item'>
                            <a href="" className='info-set__link'>
                                News
                            </a>
                        </li>
                        <li className='info-set__item'>
                            <a href="" className='info-set__link'>
                                Contacts
                            </a>
                        </li>    
                    </ul>
                    <div className='upper-line__personal-area'>
                        <img src= {personIcon} alt="" />
                        <a href="" className='personal-area-link'>
                            Personal area
                        </a>
                    </div>    
                </div>
            </div>
            <div className='header__middle-line'>
                <div className='middle-line__logo-wrapper'>
                    <img src= {logo} alt="site-LOGO" className='middle-line__logo-img' />
                </div>
                <div className='middle-line__search-area'>
                <input type="text" className='middle-line__search-box'/>
                    <div className='search-box__iner-items'>
                        <img src= {searchPic} alt="search-pic" />
                        <span className='search-box__text'>
                            Search
                        </span>
                    </div>
                </div >
                <div className='middle-line__info-set'>
                    <div className='info-set__location-set'>
                        <img src={locPic} alt="location-pic" />
                        <span className='location-set__location-title'>
                            New-York
                        </span>
                    </div>
                    <div className='info-set__order-call-set'>
                        
                        <div className='order-call-set__phone-set'>
                            <span className='order-call-set__number'>
                                0-800-300-200
                            </span>
                            <img src={arrowPic} alt="phone-arrow" />
                        </div>
                        <span className='order-call-set__subtitle'>
                            Order a call
                        </span>
                    </div>
                    <div className='info-set__like-but'>
                        <img src={likePic} alt="" className='info-set__like-but-img'/>
                    </div>
                    <div className='info-set__cart-set'>
                        <div className='cart-set__cart-wrapper'>
                            <a className='cart-wraper__basket-link' href="/basket/">
                                <img src={cartPic} alt="" />
                            </a>
                            <div className='cart-set__indicator-circle'>
                                <span className='cart-set__indicator-num'>
                                    {basketNum}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='info-set__make-order-set'>
                        <span className='make-order-set__sum'>
                            $ {finalSumn.toFixed(2)}
                        </span>
                        <a className='make-order-set__button' href=''>
                            Make an order
                        </a>
                    </div>
                </div>

            </div>
            <div className='header__lower-line'>
                <nav className='lower-line__nav'>
                    <a href="http://localhost:3000/products/" className='nav-item'>
                        Catalog
                    </a>
                    <a href="" className='nav-item'>
                        Category 1
                    </a>
                    <a href="" className='nav-item'>
                        Category 2
                    </a>
                    <a href="" className='nav-item'>
                        Category 3
                    </a>
                    <a href="" className='nav-item'>
                        Category 4
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;