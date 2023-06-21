import React from 'react'
import './about.css'
import coffeeImage from '../../assets/about-img.jpeg'

const About = () => {
    return (
        <div className = "coffee__about section__padding" id='about'>
            <h1><span>ABOUT</span> US</h1>
            <div className='coffee__about-container'>
                <div className='coffee__about-container-imgbox'>
                    <img src={coffeeImage} alt="coffee" />
                </div>

                <div className='coffee__about-container-content'>
                    <div className='coffee__about-container-content-child'>
                        <h2>What Makes Our Coffee Special?</h2>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Dignissimos, Necessitatibus Minus Rerum Quae Harum Doloribus.</p>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quis Suscipit Nihil Quo Veritatis Soluta, Tenetur Dolorum Velit Reiciendis Amet Inventore Maxime, Consequuntur Id Ipsum Quibusdam! Repudiandae Nihil Itaque Id Doloremque.</p>
                        <button type='button'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About