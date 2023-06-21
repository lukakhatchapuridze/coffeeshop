import React from 'react';
import './review.css';
import reviewImage from '../../assets/quote-img.png';
import {AiFillStar} from 'react-icons/ai'
import {FaStarHalf} from 'react-icons/fa'


const Review = ({comment, userImg, username}) => {
    return (
        <div className='coffee__review'>
            <div className='coffee__review-imgbox'>
                <img src={reviewImage} alt="review img" srcset="" />
            </div>
            <p>{comment}</p>
            <img className='coffee__review-user-img' src= {userImg} alt="" srcset="" />
            <h1>{username}</h1>
            <div className='coffee__review-stars'>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><AiFillStar /></i>
                <i><FaStarHalf /></i>
            </div>
        </div>
    )
}

export default Review