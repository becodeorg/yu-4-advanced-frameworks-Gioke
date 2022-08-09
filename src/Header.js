import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/Logo2.jpg';
import './Header.css';

export const NavBar = () => {
    return (
        <nav class="navbar">
           <div className="logo">
               <img src={ Logo} alt="logo"/>
           </div>
            <ul class="ul-head">
                <li class="li-head"><Link class="Link-head" to="#">Home</Link></li>
                <li class="li-head"><Link class="Link-head" to="#">Content</Link></li>
                <li class="li-head"><Link class="Link-head" to="#">About</Link></li>
                <li class="li-head"><Link class="Link-head" to="#">Contact</Link></li>
            </ul>
        </nav>
    )
}