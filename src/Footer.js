import React from "react";
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';
export const Footer = () => {
    return(
        <footer>
            <div class="socials">
                <FaWhatsapp class="whatsapp" /> <FaInstagram class="instagram" /> <FaFacebookF class="facebook" />
            </div>
            <p class="copyright">Vélo-W © 2022</p>
            <ul class="ul-head">
                <li class="li-foot"><Link class="Link-foot" to="#">Home</Link></li>
                <li class="li-foot"><Link class="Link-foot" to="#">Content</Link></li>
                <li class="li-foot"><Link class="Link-foot" to="#">About</Link></li>
                <li class="li-foot"><Link class="Link-foot" to="#">Contact</Link></li>
            </ul>
        </footer>
    )
}