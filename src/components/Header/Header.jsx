import React, { Component } from 'react';
import "./Header.css";
import logo from "./HeaderRes/logo.png";
import locPic from "./HeaderRes/loc-icon.png";
import searchPic from "./HeaderRes/search-pic.svg";
import likePic from "./HeaderRes/like-icon.png";

function Header (props) {

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
                <div className='middle-line__search-box'>
                    <div>
                        <img src= {searchPic} alt="search-pic" />
                        <span className='search-box__text'>
                            Search
                        </span>
                    </div>
                </div>
                <div className='middle-line__info-set'>
                    <div className='info-set__location-set'>
                        <img src={locPic} alt="location-pic" />
                        <span className='location-set__location-title'>
                            New-York
                        </span>
                    </div>
                    <div className='info-set__order-call-set'>
                        <span className='order-call-set__number'>
                            0-800-300-200
                        </span>
                        <span className='order-call-set__subtitle'>
                            Order a call
                        </span>
                    </div>
                    <div className='info-set__like-but'>
                        <img src={likePic} alt="" className='info-set__like-but-img'/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;