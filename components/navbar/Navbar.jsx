import React, { useState } from 'react';
import './navbar.css';
import logoImg from '../../assets/logo.png'
import {AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='coffee__navbar'>
            <div className='coffee__navbar-logo'>
                <img src={logoImg} alt='logo' />
            </div>
            <div className='coffee__navbar-links'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <a href='#products'>Products</a>
                <a href='#reviews'>Review</a>
                <a href='#contact'>Contact</a>
            </div>
            <div className='coffee__navbar-icons'>
                <i><AiOutlineSearch/></i>
                <i><AiOutlineShoppingCart/></i>
                <div className='coffee__navbar-menu responsive'>
                    <i><GiHamburgerMenu onClick={() => toggleMenu ? setToggleMenu(false) : setToggleMenu(true)} /></i>
                    {toggleMenu && (
                        <div className='coffee__navbar-links-responsive scale-up-center'>
                            <a href='#home'>Home</a>
                            <a href='#about'>About</a>
                            <a href='#menu'>Menu</a>
                            <a href='#products'>Products</a>
                            <a href='#reviews'>Review</a>
                            <a href='#contact'>Contact</a>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar