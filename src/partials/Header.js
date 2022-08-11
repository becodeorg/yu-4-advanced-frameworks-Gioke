import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo2.jpg';
import NavbarLogo from '../images/navbarLogo.jpg';
import '../styles/Header.css';

export const NavBar = () => {
    return (
        <nav class="navbar">
           <div className="logo">
               <img src={ Logo } alt="logo"/>
           </div>
            <div className="navLogo">
                <img src={NavbarLogo} alt="logo2"/>
            </div>
            <ul class="ul-head">
                <li class="li-head"><Link class="Link-head" to="/">Home</Link></li>
                <li class="li-head"><Link class="Link-head" to="/Gallery">Gallery</Link></li>
                <li class="li-head"><Link class="Link-head" to="/About">About</Link></li>
                <li class="li-head"><Link class="Link-head" to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}