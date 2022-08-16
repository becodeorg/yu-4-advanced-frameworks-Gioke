import React from "react";
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaRegEnvelope, FaPhoneAlt} from  'react-icons/fa';
export const Footer = () => {
    return(
        <footer className="bg-black flex justify-evenly h-auto">
            <div className="w-60">
                <h4 className="text-amber-500 font-bold underline flex col-start-1 mt-4 decoration-amber-500">Contacteer mij</h4>
                <br />
                <p className="text-white flex col-start-2">Problemen met je fiets of op zoek naar iets nieuws? <br/> Kom even langs ik help je graag verder:</p>
                <div className="text-white mt-4 flex">
                    <FaInstagram class="instagram mb-2 text-2xl ml-2 mr-2 hover:text-amber-500 hover:cursor-pointer"/> <FaFacebookF class="facebook mb-4 text-2xl ml-2 mr-2 hover:text-amber-500 hover:cursor-pointer"/> <FaRegEnvelope class="whatsapp mb-2 text-2xl mr-2 ml-2 hover:text-amber-500 hover:cursor-pointer" /> <FaPhoneAlt class="whatsapp mb-2 text-2xl ml-2 hover:text-amber-500 hover:cursor-pointer" />
                </div>
            </div>
            <div className="mb-10">
                <h4 className="text-amber-500 font-bold underline flex col-start-1 mt-4 decoration-amber-500">Mijn diensten</h4>
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
                <h4 className="text-amber-500 font-bold underline flex col-start-1 mt-4 decoration-amber-500">Openingsuren</h4>
                <br />
                <ul>
                    <li><p className="text-white flex col-start-3">Maandag: 09.00h-12.00h / 13.00h-18.00h</p></li>
                    <li><p className="text-white flex col-start-3">Dinsdag: Op afspraak</p></li>
                    <li><p className="text-white flex col-start-3">Woensdag: Op afspraak</p></li>
                    <li><p className="text-white flex col-start-3">Donderdag: Op afspraak</p></li>
                    <li><p className="text-white flex col-start-3">Vrijdag: Op afspraak</p></li>
                    <li><p className="text-white flex col-start-3">Zaterdag: 09.00h-12.00h / 13.30h-18.00h</p></li>
                    <li><p className="text-white flex col-start-3">Zon- en feestdagen: Gesloten</p></li>

                </ul>
                <div className="flex col-end">
                    <p className="text-gray-300 text-sm mt-10 mr-12">Copyright © Vélo-W  2022</p>
                </div>
            </div>

        </footer>
    )
}



