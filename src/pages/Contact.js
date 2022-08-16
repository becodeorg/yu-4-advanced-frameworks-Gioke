import React from 'react';
import '../styles/Contact.css';
import Visit from '../images/Vélo-W visitekaartje.jpg';

export const Contact = () => {
    return (
        <>
            <h1 className="font-extrabold text-3xl flex justify-center underline decoration-amber-500">Contact Me:</h1>

            <form className="h-96 grid grid-cols-3 gap-4 content-center">
                <input placeholder="Naam" className="border-solid border-2 border-gray-400 h-8 w-64 ml-10"></input>
                <input placeholder="E-mail" className="border-solid border-2 border-gray-400"></input>
                <input placeholder="Telefoon" className="border-solid border-2 border-gray-400 w-64 ml-10"></input>
                <textarea placeholder="Text" className="border-solid border-2 border-gray-400 col-start-2 h-64"></textarea>
                <button className="border-solid border-2 border-gray-400 col-start-2 rounded-lg">Send</button>
            </form>
        </>
    )
}
