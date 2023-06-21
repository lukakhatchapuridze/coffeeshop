import React from 'react'
import './reviews.css'
import Review from '../../components/review/Review'
import { userImg01, userImg02, userImg03 } from './imports'

const reviewsData = [
    {
        comment: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Sequi Atque Excepturi Vitae Ea Ipsa Eos Laborum Id Quo Esse, Porro Ullam Similique Error Soluta Veritatis. Iusto Magni Aliquam Sunt Architecto?",
        userImg: userImg01,
        username: 'John John',
    },

    {
        comment: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Sequi Atque Excepturi Vitae Ea Ipsa Eos Laborum Id Quo Esse, Porro Ullam Similique Error Soluta Veritatis. Iusto Magni Aliquam Sunt Architecto?",
        userImg: userImg02,
        username: 'John Doe',
    },

    {
        comment: "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Sequi Atque Excepturi Vitae Ea Ipsa Eos Laborum Id Quo Esse, Porro Ullam Similique Error Soluta Veritatis. Iusto Magni Aliquam Sunt Architecto?",
        userImg: userImg03,
        username: 'Doe Doe',
    },


]

const Reviews = () => {
    return (
        <div className='coffee__reviews section__padding' id='reviews'>
            <h1 className='coffee__reviews-title'>CUSTOMER'S <span>REVIEW</span></h1>
            <div className='coffee__reviews-container'>
                {reviewsData.map((item,index) => (
                    <Review comment={item.comment} userImg={item.userImg} username={item.username} key={item.username + index} />
                ))}
            </div>
        </div>
    )
}

export default Reviews