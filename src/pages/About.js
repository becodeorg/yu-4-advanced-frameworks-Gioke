import React from 'react';
import { Morgan, Deschee, Vdbparts, Shimano, Minerva, Dewo, Codagex, Verwimp, Cema } from '../components/PartnerData';

export const About = () => {
    return (
        <div className="h-screen">
        <div><h1 className="text-xl font-bold underline">About Vélo-W:</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis in molestias omnis rerum. Aliquid asperiores consectetur earum, enim fuga fugiat ipsum iste laboriosam magnam minus natus nesciunt quos repellat sequi temporibus ut, veniam. Atque deleniti quas reiciendis? Aliquid aspernatur, consequuntur doloremque maxime natus omnis perferendis possimus provident tempora veniam.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et id in iste laudantium maiores modi officia optio quis, sapiente ullam veniam, voluptate, voluptates. Aperiam at eum ex fugit maxime nesciunt officiis repudiandae. Ad amet beatae consequuntur cum dolor doloribus error expedita facilis, ipsum laudantium magnam maiores nam necessitatibus, nemo ratione repellendus similique sint sunt tempora veniam vitae, voluptatem voluptatibus.</p>
        </div>
            <br/>
            <div>
                <h1 className="text-xl font-bold underline">Partners:</h1>
            </div>
            <div className="flex justify-evenly">
                <img className="scale-50" src={ Morgan } alt="logo morgan blue"/>
                <img className="scale-50" src={ Deschee } alt="Logo descheemaeker"/>
                <img className="scale-50" src={ Vdbparts } alt="Logo VdbParts"/>
                <img className="scale-50" src={ Shimano } alt="Logo Shimano"/>
            </div>
            <div className="flex justify-evenly">
                <img className="w-60 h-28" src={ Minerva } alt="Logo Minerva"/>
                <img className="scale-50" src={ Dewo } alt=" Logo Dewo-Europe"/>
                <img className="scale-50" src={ Codagex } alt="Logo Codagex"/>
                <img className="scale-50" src={ Verwimp } alt="Logo Verwimp"/>
                <img className="scale-50" src={ Cema } alt="Logo Cema Bearing"/>
            </div>
        </div>

    )
}