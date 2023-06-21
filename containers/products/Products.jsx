import React from 'react'
import './products.css'
import Product from '../../components/product/Product'
import { product1, product2, product3 } from './imports'

const productData = [
    {
        imgUrl: product1,
        title: "Fresh Coffee",
        price: "$13.35",
        prevPrice: "$15.99"
    },

    {
        imgUrl: product2,
        title: "Fresh Coffee",
        price: "$17.55",
        prevPrice: "$20.99"
    },

    {
        imgUrl: product3,
        title: "Fresh Coffee",
        price: "$11.95",
        prevPrice: "$13.79"
    },
]

const Products = () => {
    return (
        <div className='coffee__products section__padding' id='products'>
            <h1 className='coffee__products-title'>OUR <span> PRODUCTS</span></h1>
            <div className='coffee__products-container'>
                {productData.map((item, index) => (
                    <Product imgUrl={item.imgUrl} title={item.title} price={item.price} prevPrice={item.prevPrice} key={item.title + index} />
                ))}
            </div>        
        </div>
    )
}

export default Products