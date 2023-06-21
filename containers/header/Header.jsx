import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='coffee__header section__padding' id='home'>
            <div className='coffee__header-content'>
                <h1>FRESH COFFEE IN <br /> THE MORNING</h1>
                <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Tenetur <br /> Voluptas Magnam Itaque, Commodi.</p>
                <button type='button'>Get Yours Now</button> 
            </div>
        </div>
    )
}

export default Header