import React from 'react';
import './product.css';
import {AiOutlineShoppingCart, AiFillHeart, AiFillStar} from 'react-icons/ai'
import {FaEye, FaStarHalf} from 'react-icons/fa'

const Product = ({imgUrl, title, price, prevPrice}) => {
    return (
        <div className='coffee__product'>
            <div className='coffee__product-icons'>
                <i><AiOutlineShoppingCart /></i>
                <i><AiFillHeart /></i>
                <i><FaEye /></i>
            </div>
            <div className='coffee__product-imgbox'>
                <img src={imgUrl} alt="coffe product img" srcset="" />
            </div>

            <h1>{title}</h1>
            <div className='coffee__product-stars'>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><FaStarHalf /></i>
            </div>

            <p>{price} <s>{prevPrice}</s></p>
        </div>
    )
}

export default Product;
