import React, { Component, useState } from 'react';
import "./SingleView.css";
import starPic from "./SingleRes/star-icon.png";
import scalesPic from "./SingleRes/scales-icon.png";
import likePic from "./SingleRes/like-icon.png";

function SingleView (props) {


    return(
        <>
        <section className='item'>
            <div className='item__pic-info-set'>
                <div className='pic-info-set__pic-set'>
                    <div className='pic-set__main-image-wrapper'>
                        {props.item.name ? <img src = {props.photos[0]}
                        className="pic-set__img" alt="item-another-photo" /> : false }
                    </div>
                    <div className='pic-set__image-wrapper'>
                        {props.item.name ? <img src = {props.photos[1]}
                        className="pic-set__img" alt="item-another-photo" /> : false }
                    </div>
                    <div className='pic-set__image-wrapper'>
                        {props.item.name ? <img src = {props.photos[2]}
                        className="pic-set__img" alt="item-another-photo" /> : false }
                    </div>
                    <div className='pic-set__image-wrapper'>
                        {props.item.name ? <img src = {props.photos[3]}
                        className="pic-set__img" alt="item-another-photo" /> : false }
                    </div>
                    <div className='pic-set__image-wrapper'>
                        {props.item.name ? <img src = {props.photos[4]}
                        className="pic-set__img" alt="item-another-photo" /> : false }
                    </div>
                </div>
                <article className='pic-info-set__info-set'>
                    <div className='info-set__title-set'>
                        <div className='title-set__title-info'>
                            <div className='title-info__title-stars-set'>
                                <span className='title-stars-set__title'>
                                    {props.item.name}
                                </span>
                                { props.item.name ? 
                                    <div className='title-info__title-stars-set'>
                                        { getRating(props.item.rating) }
                                    </div> : false
                                }
                            </div>
                            {
                                props.item.available ? <span className='title-set__available'>Available</span> :
                                <span className='title-set__not-available'>Available</span>
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
                </article>
            </div>
        </section>
        
        </>
    )

}

export default SingleView;

const getRating = (num) => {

    let element = [];

    for(let i = 0; i < num; i++){
        element.push(<img src={starPic} key = {i}></img>);
    }

    return element;
}