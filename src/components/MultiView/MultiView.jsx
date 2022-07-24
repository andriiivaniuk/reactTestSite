import React, { Component, useState, useEffect } from 'react';
import "./MultiView.css";
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';
import ProductsList from './ProductsList';
import Range from '../Range/Range';
import Dropdown from '../Dropdown/Dropdown';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeFilterCatFromState, addFilterCatToState, addPossibleFilter } from '../../state/action-creators';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const POSSIBLE_FILTERS = ["categories", "country", "available" ];
const SORTING_OPTIONS = ["rating", "price", "alphabet", "reviews"];

export function MultiView (props) {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterOptionsObj, setFilterOptionsObj] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});
    const [openFilters, setOpenFilters] = useState({});
    const [priceFilter, setPriceFilter] = useState({min: null, max: null});
    const [currentSort, setCurrentSort] = useState(SORTING_OPTIONS[0]);

    const currentSelectedFilters = useSelector(state => state.filters);
    const dispatch = useDispatch();


    useEffect(() => {
        setLoading(true);
        fetchStorage();

        for(let i = 0 ; i < POSSIBLE_FILTERS.length; i++) {
            setSelectedFilters(Object.assign(selectedFilters, {[POSSIBLE_FILTERS[i]]: [] }));
            setOpenFilters(Object.assign(openFilters, {[POSSIBLE_FILTERS[i]]: true}));
            dispatch(addPossibleFilter(POSSIBLE_FILTERS[i]));

        }
        
        console.log(openFilters);

    }, []);

    useEffect(() => {
        console.log(selectedFilters);
    }, [selectedFilters]);

    const fetchStorage = async () => {

        try {
            
            let storageProm = await fetch('http://localhost:3100/items/');
            if (storageProm.ok) {

                let items = await storageProm.json();
                setProducts(items);
                //console.log(items);
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
            {products.length !== 0 &&
                <>                     
                <Dropdown sortingOptions={SORTING_OPTIONS}
                setCurrentSort = {setCurrentSort}>
                </Dropdown>

                <section className='multi-page'>
                    <div className='filters-column'>    
                        <div className='filters-title'>
                            Goods filters
                        </div>

                        <Range products={products} 
                        setPriceFilter = {setPriceFilter}>
                        </Range>
                        
                        {Object.keys(filterOptionsObj).length && 
                            POSSIBLE_FILTERS.map((filter) => 
                                <Filter
                                 title = {filter}
                                 options = {filterOptionsObj[filter]}
                                 openFilters = {openFilters}
                                 setOpenFilters = {setOpenFilters}
                                 key = {Math.random()}>
                                </Filter>
                            )
                        }
                    </div>
                    
                    <ProductsList
                    products={products} loading={loading}
                     priceFilter = {priceFilter}
                     currentSort = {currentSort}
                     SORTING_OPTIONS = {SORTING_OPTIONS}>
                     </ProductsList>
                </section>
                </>
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

    //console.log(finalObj);
    return finalObj;
}