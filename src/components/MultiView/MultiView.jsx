import React, { Component, useState } from 'react';
import "./MultiView.css";
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';

export function MultiView (props) {
    return(
            <>
            {props.catalog &&
                <section className='multi-page'>
                    <div className='filters-column'>
                        <div className='filters-title'>
                            Goods filter
                        </div>
                        <Filter></Filter>
                    </div>
                    <div className='shown-items'>
                        <ItemCard item = {props.catalog[0]}></ItemCard>
                        <ItemCard item = {props.catalog[1]}></ItemCard>
                        <ItemCard item = {props.catalog[0]}></ItemCard>
                    </div> 
                </section>
            }
            </>

    )
}

export default MultiView;