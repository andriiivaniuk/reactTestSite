import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import './Range.css';

const Range = ({products, setPriceFilter}) => {
  
    if(!products){
        return null;
    }

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [ifCounted, setCounted] = useState(false);
    const [maxRange, setMaxRange] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);
    const [currentMin, setCurrentMin] = useState(0);

    const firstCircleRef = useRef();
    const secondCircleRef = useRef();

    const [firstCircle, setFirstCircle] = useState(-8);
    const [secondCircle, setSecondCircle] = useState(272);

    const firstCirclePositionRef = useRef(-8);
    const seconCirclePositionRef = useRef(272);

    const isDrowing = useRef();
    const rangeRef = useRef();

    useEffect(() => {
        setPriceFilter({
            min: currentMin.toFixed(2),
            max: currentMax.toFixed(2)
        });
        
    }, [currentMax, currentMin]);

    useEffect(() => {
        firstCircleRef.current.style.left = firstCircle + 'px';
        firstCirclePositionRef.current = firstCircle;
    }, [firstCircle]);

    useEffect(() => {
        secondCircleRef.current.style.left = secondCircle + 'px';
        seconCirclePositionRef.current = secondCircle;
    }, [secondCircle]);

    if(ifCounted === false){

        let min = parseFloat(products[0].price);
        let max = parseFloat(products[0].price);

        products.forEach((product) => {
            if(parseFloat(product.price) > max) { max = parseFloat(product.price) ; }
            if(parseFloat(product.price) < min) { min = parseFloat(product.price) ; }
        })

        setMaxPrice(max);
        setMinPrice(min);
        setMaxRange(max - min);
        setCurrentMax(max);
        setCurrentMin(min);

        setCounted(true);
    }

    useEffect(() => {

        document.addEventListener('mousedown', (event) => {
            isDrowing.current = true;
            const target = event.target;

            if(target.classList.contains('circle-min') || target.classList.contains('circle-max')){
                const moveHandler = (event) => {
                    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

                    if(event.pageX > rangeRef.current.getBoundingClientRect().left  && event.pageX < rangeRef.current.getBoundingClientRect().right) {
                        const circleOffset = clientX - rangeRef.current.getBoundingClientRect().left - 8 ;
    
                        if(firstCircleRef.current === target && circleOffset < (seconCirclePositionRef.current - 8)) {
                                                        
                            let percent =  ((circleOffset + 7) / 280) * 100;
                            let priceOffset = (maxRange / 100) * percent;
                                                        
                            setFirstCircle(circleOffset);
                            setCurrentMin(minPrice + priceOffset);
                        }
    
                        if(secondCircleRef.current === target && circleOffset > (firstCirclePositionRef.current + 8)) {
                            let percent =  ((circleOffset - 272) / 280) * 100;
                            let priceOffset = (maxRange / 100) * percent;
                       
                            setSecondCircle(circleOffset);
                            setCurrentMax(maxPrice + priceOffset);
                        }
                    }
                }

                
            document.addEventListener('mousemove', moveHandler);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveHandler);
            });

                    
            firstCircleRef.current.ondragstart = function() {
                return false;
            };

            secondCircleRef.current.ondragstart = function() {
                return false;
            };

        }

        });
    }, [])

    return ( products.length !== 0 && 
        <div className="price-range">
            <div className="range">
                <div className="range-line" ref={rangeRef}>
                    <div className="circle-min" ref = {firstCircleRef}></div>
                    <div className="circle-max" ref = {secondCircleRef}></div>
                </div>
            </div>
            <div className="placeholders">
                <input type="text" className="placeholder-min" value={currentMin.toFixed(2)} onChange = {() => {}}/>
                <input type="text" className="placeholder-max" value={currentMax.toFixed(2)} onChange = {() => {}}/>
            </div>
        </div>
    )
};

export default Range; 
