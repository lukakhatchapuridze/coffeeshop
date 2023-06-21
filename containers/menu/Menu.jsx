import React from 'react'
import './menu.css'
import Coffee from '../../components/coffee/Coffee'
import { coffee01, coffee02, coffee03, coffee04, coffee05, coffee06} from './imports';

const coffeeData = [
    {
        imgUrl: coffee01,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$15.99',
        coffeePrevPrice: '20.99'
    },

    {
        imgUrl: coffee02,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$17.99',
        coffeePrevPrice: '22.99'
    },

    {
        imgUrl: coffee03,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$13.99',
        coffeePrevPrice: '15.99'
    },

    {
        imgUrl: coffee04,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$11.99',
        coffeePrevPrice: '13.99'
    },

    {
        imgUrl: coffee05,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$15.99',
        coffeePrevPrice: '20.99'
    },

    {
        imgUrl: coffee06,
        coffeeName: 'Tasty And Healthy',
        coffeePrice: '$15.99',
        coffeePrevPrice: '20.99'
    },
]

const Menu = () => {
    return (
        <div className='coffee__menu section__padding' id='menu'>
            <h1 className='coffee__menu-title'>OUR <span>MENU</span></h1>
            <div className='coffee__menu-container'>
               {coffeeData.map((item,index) => (
                <Coffee imgUrl={item.imgUrl} coffeeName={item.coffeeName} coffeePrice={item.coffeePrice} coffeePrevPrice={item.coffeePrevPrice} key={item.coffeeName + index + item.coffeePrice} /> 
               ))}
            </div>
        </div>
    )
}

export default Menu