import React from "react";
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import '../styles/Footer.css';
export const Footer = () => {
    return(
        <footer className="bg-black flex justify-evenly h-auto">
            <div className="w-60">
                <h4 className="text-white font-bold underline flex col-start-1 mt-2">Contacteer mij</h4>
                <br />
                <p className="text-white flex col-start-2">Problemen met je fiets of op zoek naar iets nieuws? <br/> Kom even langs ik help je graag verder:</p>
            </div>
            <div className="mb-10">
                <h4 className="text-white font-bold underline flex col-start-1 mt-2">Mijn diensten</h4>
                <br />
                <ul className="text-white">
                    <li><p className="text-white flex col-start-3">*Herstel fietsen</p></li>
                    <li><p className="text-white flex col-start-4">*Onderhoud fietsen</p></li>
                    <li><p className="text-white flex col-start-5">*Onderdelen</p></li>
                    <li><p className="text-white flex col-start-6">*Cleaning en behandeling fietsen</p></li>
                    <li><p className="text-white flex col-start-7">*Verkoop fietsen</p></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-white font-bold underline flex col-start-1 mt-2">Mijn troeven</h4>
                <br />
                <ul>
                    <li><p className="text-white flex col-start-3">*snelle service</p></li>
                    <li><p className="text-white flex col-start-4">*kwaliteitsfietsen</p></li>
                </ul>
            </div>

        </footer>
    )
}


// <div className="socials">
//     <FaWhatsapp class="whatsapp"/> <FaInstagram class="instagram"/> <FaFacebookF class="facebook"/>
// </div>
// <p className="copyright">Vélo-W © 2022</p>
// <ul className="ul-head">
//     <li className="li-foot"><Link class="Link-foot" to="#">Home</Link></li>
//     <li className="li-foot"><Link class="Link-foot" to="#">Gallery</Link></li>
//     <li className="li-foot"><Link class="Link-foot" to="#">About</Link></li>
//     <li className="li-foot"><Link class="Link-foot" to="#">Contact</Link></li>
// </ul>