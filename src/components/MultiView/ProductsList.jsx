import React from "react";

import ItemCard from "../ItemCard/ItemCard";
import withLoader from "../../hocs/withLoader/withLoader";

import "./MultiView.css";

const ProductList = ({products, selectedFilters}) => {
    return <div className='shown-items'>
        {ifEmpty(selectedFilters) && products.map(product => <ItemCard item={product} key={product.id} />)}
        { !ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters).length === 0 ?
         <span className="no-items-found-text">No items found :(</span> :
        formItemsSet(products, selectedFilters).map(product => <ItemCard item={product} key={product.id} />)}
    </div> 
};

export default withLoader(ProductList);

const ifEmpty = (obj) => {

    if(Object.values(obj).every((field) => field.length === 0)){
        return true;
    } else{
        return false;
    }
}

const formItemsSet = (products, filters) => {
    let finalArr = [];
    let filterKeys = Object.keys(filters);

    products.forEach((item) => {
        let currentItem = null;

        for(let i = 0; i < filterKeys.length; i++) {
            if(filters[filterKeys[i]].length !== 0){

                if(filters[filterKeys[i]].every((elem) => 
                    item[filterKeys[i]].includes(elem)
                )){
                    currentItem = true;
                } else {
                    currentItem = false;
                    break;
                }
            } 
        }

        if(currentItem === true){
            finalArr.push(item);
        }
    });

    return finalArr;
} 