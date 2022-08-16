import React from 'react';
import '../styles/Contact.css';
import Visit from '../images/Vélo-W visitekaartje.jpg';

export const Contact = () => {
    return (
        <>
            <h1 className="font-extrabold text-3xl flex justify-center underline decoration-amber-500">Contact Me:</h1>

            <form className="h-96 grid grid-cols-3 gap-4 content-center">
                <input placeholder="Naam" className="border-solid border-2 border-gray-400 focus: outline-none h-8 w-64 ml-10"></input>
                <input placeholder="E-Mail" className="border-solid border-2 border-gray-400 focus: outline-none"></input>
                <input placeholder="Telefoon" className="border-solid border-2 border-gray-400 focus: outline-none w-64 ml-8"></input>
                <textarea placeholder="Text" className="border-solid border-2 border-gray-400 focus: outline-none col-start-2 h-52"></textarea>
                <button className="border-2 border-gray-400 col-start-2 rounded-lg hover:bg-amber-500 focus: outline-none hover:text-white hover:border-amber-500">Send</button>
            </form>
        </>
    )
}
