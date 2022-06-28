import React, { Component, useState, useEffect } from 'react';
import "./MultiView.css";
import ItemCard from '../ItemCard/ItemCard';
import Filter from '../Filter/Filter';
import ProductsList from './ProductsList';

export function MultiView (props) {

    useEffect(() => {
        setLoading(true);
        fetchStorage();
    }, []);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStorage = async () => {

        try {
            
            let storageProm = await fetch('http://localhost:3100/items/');
            if (storageProm.ok) {

                let items = await storageProm.json();
                setProducts(items);
                console.log(items);

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
                        <Filter></Filter>
                    </div>
                    <ProductsList products={products} loading={loading}></ProductsList>
                </section>
            }
            </>

    )
}

export default MultiView;