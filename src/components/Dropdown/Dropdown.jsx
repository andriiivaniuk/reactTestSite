import React, { useState } from "react"
import { useRef } from "react"
import "./Dropdown.css"
import arrowPic from "./DropDownRes/arrow.png"

export const Dropdown = ({sortingOptions, setCurrentSort}) => {

    const selectorRef = useRef();
    const selectorMenuRef = useRef();

    const [isSelectorMenuHidden, setIsSelectorMenuHidden] = useState(true);
    const [currentSelect, setCurrentSelect] = useState(sortingOptions[0]);

    const menuClassList = isSelectorMenuHidden ? "selector-menu" : "selector-menu menu-hidden";

    return <div className="dropdown">
        <div className="selector" ref = {selectorRef} onClick = {() => {
            setIsSelectorMenuHidden(!isSelectorMenuHidden);
        }}>
            <span className="current-selected-option">
                Sort by {currentSelect}
            </span>
            <img src={arrowPic} alt="" className="arrowPic"/>
            <div className={menuClassList} ref = {selectorMenuRef} >
                {sortingOptions.map((option, index) => 
                    <li key = {Math.random()} className="selector-option"
                    onClick={() => {
                        setCurrentSelect(sortingOptions[index]);
                        setCurrentSort(sortingOptions[index]);
                    } }>{option}</li>
                )}
            </div>
        </div>
    </div>
}

export default Dropdown;