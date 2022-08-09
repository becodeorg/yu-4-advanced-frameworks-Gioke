import './App.css';
import React from 'react'
import { Routes } from 'react-router-dom';
import { Title } from './Title'
import { NavBar } from "./Header";
import { Footer } from './Footer'
import { ImageSlider } from "./Components/ImageSlider";
import {SliderData} from "./Components/SliderData";

function App() {
    return (

    <div>
        <NavBar/>
        <Title />
        <ImageSlider slides={SliderData} />;
        <Footer />
    </div>
    )


}
export default App;
