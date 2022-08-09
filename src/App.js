import './App.css';
import React from 'react'
import { NavBar, Footer} from './partials';
import { ImageSlider } from "./components/ImageSlider";
import {SliderData} from "./components/SliderData";

function App() {
    return (

    <div>
        <NavBar/>
        <ImageSlider slides={SliderData} />;
        <Footer />
    </div>
    )


}
export default App;
