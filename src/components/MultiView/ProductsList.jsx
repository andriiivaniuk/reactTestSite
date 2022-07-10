import React from "react";

import ItemCard from "../ItemCard/ItemCard";
import withLoader from "../../hocs/withLoader/withLoader";

import "./MultiView.css";

const ProductList = ({products, selectedFilters, priceFilter}) => {

    return  <div className='shown-items'>
        {ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter, true).map(product => <ItemCard item={product} key={product.id} />)}
        { !ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter).length === 0 ?
         <span className="no-items-found-text">No items found :(</span> :
        formItemsSet(products, selectedFilters, priceFilter).map(product => <ItemCard item={product} key={product.id} />)}
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

const formItemsSet = (products, filters, priceFilter, onlyPrice = false) => {

    console.log("formItemsSet list pricefilter: ");
    console.log(priceFilter);

    let finalArr = [];
    let filterKeys = Object.keys(filters);

    if(onlyPrice){
        products.forEach((item) => {
            if((item.price >= priceFilter.min) && (item.price <= priceFilter.max)){
                finalArr.push(item);
            }
        })

        return finalArr;
    }

    products.forEach((item) => {
        let currentItem = null;

        for(let i = 0; i < filterKeys.length; i++) {
            if(filters[filterKeys[i]].length !== 0){

                if((filters[filterKeys[i]].every((elem) => 
                    item[filterKeys[i]].includes(elem)
                )) && (item.price >= priceFilter.min) && (item.price <= priceFilter.max)){
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