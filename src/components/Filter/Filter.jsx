import React, { Component } from 'react';
import "./Filter.css"
import arrowPic from "./filterRes/arrow.png";

export function Filter ({title, options, setMevFilters, mevFilters, openFilters, setOpenFilters }){


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
                                    let newArr = mevFilters[title];

                                    if(newArr.includes(option)){
                                        newArr = newArr.filter((elem) => elem !== option);
                                    } else{
                                        newArr.push(option);
                                    }

                                    let newLocalObj = {...mevFilters, [title]: newArr}
                                    setMevFilters(newLocalObj);
                                    
                                }}>
                                    {
                                        mevFilters[title].includes(option) &&
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