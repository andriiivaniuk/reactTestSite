import React from "react";

import ItemCard from "../ItemCard/ItemCard";
import withLoader from "../../hocs/withLoader/withLoader";

import "./MultiView.css";

const ProductList = ({products, selectedFilters, priceFilter, currentSort}) => {

    if((ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter, currentSort, true).length === 0)){
        return  <div className='shown-items'>
            <span className="no-items-found-text">No items found :(</span> 
        </div> 
    }
    
    if((ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter, currentSort, true).length !== 0)){
        return <div className='shown-items'>
            {formItemsSet(products, selectedFilters, priceFilter, currentSort, true).map(product => <ItemCard item={product} key={product.id} />)}
        </div>
    }

    if(!ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter, currentSort).length === 0){
        return <span className="no-items-found-text">No items found :(</span>
    }

    if(!ifEmpty(selectedFilters) && formItemsSet(products, selectedFilters, priceFilter, currentSort).length !== 0){
        return <div className='shown-items'>
        {formItemsSet(products, selectedFilters, priceFilter, currentSort).map(product => <ItemCard item={product} key={product.id} />)}
        </div>
    }
};

export default withLoader(ProductList);

const ifEmpty = (obj) => {

    if(Object.values(obj).every((field) => field.length === 0)){
        return true;
    } else{
        return false;
    }
}

const formItemsSet = (products, filters, priceFilter, currentSort, onlyPrice = false) => {

    console.log("formItemsSet list pricefilter: ");
    console.log(priceFilter);

    let finalArr = [];
    let filterKeys = Object.keys(filters);

    const sortFinalArr = (arr) => {

        switch(currentSort){
            case "rating":
                arr.sort((a, b) => a.rating < b.rating ? 1 : -1);
                break;
            case "price":
                arr.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
                break;
            case "alphabet":
                arr.sort((a, b) => a.name > b.name ? 1 : -1);
                break;
            case "reviews":
                arr.sort((a, b) => Number(a.reviews) <  Number(b.reviews) ? 1 : -1);
                break;
        }

        return arr;
    }

    if(onlyPrice){
        products.forEach((item) => {
            if((item.price >= priceFilter.min) && (item.price <= priceFilter.max)){
                finalArr.push(item);
            }
        })

        return sortFinalArr(finalArr);
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

    return sortFinalArr(finalArr);
} 