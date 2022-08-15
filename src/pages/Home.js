import React from "react";
import Wouter from '../images/Wouter.jpg';

export const Home = () => {

    return (
        // <div className="bg-[url('../images/Wouter.jpg')]"></div>
        <div>
            <img className="h-screen w-screen" src={ Wouter } alt="foto Wouter"/>
        </div>
    )
}

