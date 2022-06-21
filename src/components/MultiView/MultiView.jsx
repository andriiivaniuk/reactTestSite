import React, { Component, useState } from 'react';
import "./MultiView.css";
import ItemCard from '../ItemCard/ItemCard';

export function MultiView (props) {
    return(
            <>
            {props.catalog ?
                <div className='multi-view'>
                    <ItemCard item = {props.catalog[0]}></ItemCard>
                    <ItemCard item = {props.catalog[0]}></ItemCard>
                    <ItemCard item = {props.catalog[0]}></ItemCard>
                </div> : true
            }
            </>

    )
}

export default MultiView;