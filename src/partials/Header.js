import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll';
import Logo from '../images/Logo2.jpg';
import NavbarLogo from '../images/navbarLogo.jpg';

export const NavBar = () => {
    return (
        <nav className="bg-black flex justify-between h-auto">
           <div className="h-30 w-40">
               <img src={ Logo } alt="logo"/>
           </div>
            <div className="h-30 w-80 mt-6">
                <img src={NavbarLogo} alt="logo2"/>
            </div>
            <ul className="text-white mt-4 flex ">
                <li className="text-white mr-4 mt-4 text-xl hover:underline decoration-amber-500 underline-offset-8"><Link to="/" >Home</Link></li>
                <li className="text-white mr-4 mt-4 text-xl hover:underline decoration-amber-500 underline-offset-8"><Link to="/Info" >Info</Link></li>
                <li className="text-white mr-4 mt-4 text-xl hover:underline decoration-amber-500 underline-offset-8"><Link to="/About">About</Link></li>
                <li className="text-white mr-4 mt-4 text-xl hover:underline decoration-amber-500 underline-offset-8"><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}