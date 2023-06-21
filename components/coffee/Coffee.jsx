import React from 'react';
import './coffee.css';

const Coffee = ({imgUrl, coffeeName, coffeePrice, coffeePrevPrice}) => {
    return(
        <div className='coffee__container-coffee'>
            <img src={imgUrl} alt="" srcset="" />
            <h1>{coffeeName}</h1>
            <p>{coffeePrice} <span> <s>{coffeePrevPrice}</s></span></p>
            <button type='button'>Add To Cart</button>
        </div>
    )
}

export default Coffee