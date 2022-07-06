import React, { Component, useState, useEffect } from 'react';
import "./MultiView.css";
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';
import ProductsList from './ProductsList';

const POSSIBLE_FILTERS = ["categories", "country", "available" ];

export function MultiView (props) {

    useEffect(() => {
        setLoading(true);
        fetchStorage();
    }, []);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterOptionsObj, setFilterOptionsObj] = useState({});

    const fetchStorage = async () => {

        try {
            
            let storageProm = await fetch('http://localhost:3100/items/');
            if (storageProm.ok) {

                let items = await storageProm.json();
                setProducts(items);
                // console.log(items);
                setFilterOptionsObj(Object.assign({}, formFiltersArr(items)));
            }
        }
        catch {
            alert("something went wrong with storage data! Json data missing or server containing it is not running "
                + "set the json-server up!write in CMD: json-server --watch database.json --port 3100");
        }
        finally{
            setLoading(false);
        }
    }

    return(
            <>
            {products &&
                <section className='multi-page'>
                    <div className='filters-column'>
                        <div className='filters-title'>
                            Goods filter
                        </div>
                        
                        {Object.keys(filterOptionsObj).length && 
                            POSSIBLE_FILTERS.map((filter) => 
                                <Filter title = {filter} options = {filterOptionsObj[filter]} key = {Math.random()}></Filter>
                            )
                        }
                    </div>
                    <ProductsList products={products} loading={loading}></ProductsList>
                </section>
            }
            </>

    )
}

export default MultiView;

const formFiltersArr = (items) => {
    let finalObj = {};

    POSSIBLE_FILTERS.forEach((filterTitle) => {

        let filterTitleOption = new Set();

        for(let i = 0; i < items.length; i++ ){
           
            if (typeof items[i][filterTitle] === 'object') {
                for(let j = 0; j < items[i][filterTitle].length; j++){
                    filterTitleOption.add(items[i][filterTitle][j]);
                }
            } else {
                filterTitleOption.add(items[i][filterTitle]);
            }
        }

        finalObj[filterTitle] = Array.from(filterTitleOption);

    });

    console.log(finalObj);
    return finalObj;
}