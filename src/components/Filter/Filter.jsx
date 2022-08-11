import React, { Component } from 'react';
import "./Filter.css"
import arrowPic from "./filterRes/arrow.png";

import { addFilterCatToState, removeFilterCatFromState } from '../../state/action-creators';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

export function Filter ({title, options, openFilters, setOpenFilters }){

    const dispatch = useDispatch();
    const currentSelectedFilters = useSelector(state => state.filters);

    console.log("filter update")

    let listClassStr = openFilters[title] ? "filter-options-list" : "list-closed";
    let arrowClasslist = openFilters[title] ?  "filter-show-toggle" : "filter-show-toggle arrow-rotated";

    return( 
        <div className='filter'>
           <span className='filter-title'>{title}
                <img src={arrowPic} className = {arrowClasslist} alt="" onClick = {() => {
                    setOpenFilters(Object.assign({}, Object.assign(openFilters, openFilters[title] = !openFilters[title])));
                }} />
           </span>
            <div className={listClassStr}>
                {   
                    options.map((option) => 
                        <div className='checkbox-set' key = {Math.random()}>
                            <div className='set__checkbox-component'
                                onClick={() => {

                                    if(currentSelectedFilters[title].includes(option)){
                                        dispatch(removeFilterCatFromState({[title]: option }));
                                    } 
                                    if(!currentSelectedFilters[title].includes(option)){
                                        dispatch(addFilterCatToState({[title]: option }));
                                    }
                                    
                                }}>
                                    {
                                        currentSelectedFilters[title].includes(option) &&
                                        <div className='checkbox-ckeck'></div>
                                    }
                                </div>
                            <span className='option-name'>
                                {option}
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Filter;