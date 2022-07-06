import React, { Component } from 'react';
import { useState } from 'react';
import "./Filter.css"
import arrowPic from "./filterRes/arrow.png";

export function Filter ({title, options}) {
    console.log(options);

    const [ifShown, setShown] = useState(true);
    const [checkedArr, setCheckedArr] = useState([]);

    let listClassStr = ifShown ? "filter-options-list" : "list-closed";
    let arrowClasslist = ifShown ?  "filter-show-toggle" : "filter-show-toggle arrow-rotated";

    return(
        <div className='filter'>
           <span className='filter-title'>{title}
                <img src={arrowPic} className = {arrowClasslist} alt="" onClick = {() => {
                    setShown(!ifShown);
                }} />
           </span>
            <div className={listClassStr}>
                {   
                    options.map((option) => 
                        <div className='checkbox-set' key = {Math.random()}>
                            <div className='set__checkbox-component'
                                onClick={() => {
                                    let newArr = checkedArr;

                                    if(newArr.includes(option)){
                                        newArr = newArr.filter((elem) => elem !== option);
                                    } else{
                                        newArr.push(option);
                                    }

                                    setCheckedArr([].concat(newArr));
                                    console.log(newArr);
                                    
                                }}>
                                    {
                                        checkedArr.includes(option) &&
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