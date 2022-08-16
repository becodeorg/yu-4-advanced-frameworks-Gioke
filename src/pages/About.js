import React from 'react';
import { Morgan, Deschee, Vdbparts, Shimano, Minerva, Dewo, Codagex, Verwimp, Cema } from '../components/PartnerData';

export const About = () => {
    return (
        <div className="h-screen">
        <div><h1 className="text-xl font-bold text-2xl underline flex justify-center mt-3">About Vélo-W:</h1>
            <br/>
            <p className="p-2">Hey.
                <br/>
                Al van jongs af aan was ik gebeten door het fietsen. Op latere leeftijd werd die microbe op amateurgebied een tijdje competitief in het wegwielrennen, cyclocross en mountenbiken. Naast het rijden zelf moet er natuurlijk ook aan de fiets gewerkt worden. Aldoende leert men, vooral met het eigen materiaal en de nodige interesse.
                Met de jaren heb ik me verdiept in de techniek van de fietsen. Alsook zijn we nog steeds bezig met opleidingen te volgen. Er is veel veranderd in de fietswereld en dit zal nog blijven evolueren.
                In combinatie met een vaste job als opbouwer/carrossier van bedrijfswagens hebben we beslist om een onderneming op te starten in het herstellen en verkopen van fietsen.
                Heeft jou fiets een onderhoud nodig of een herstelling? Aarzel dan niet om ons te contacteren of kom even langs.
                Wij herstellen alle fietsen. Onze werkplaats is ook voorziend voor mindervalide fietsen en ook voor bakfietsen.
                Of bent u op zoek naar een nieuwe kinderfiets, stadsfiets, Ebike of mtb.
                Alsook 2de hands fietsen kan je bij ons soms vinden.
                We helpen u graag verder.

                Grts Wouter </p>
        </div>
            <br/>
            <div>
                <h1 className="text-xl font-bold underline p-2">Partners:</h1>
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