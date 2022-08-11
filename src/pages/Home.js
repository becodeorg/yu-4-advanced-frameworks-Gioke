import {ImageSlider} from "../components/ImageSlider";
import {SliderData} from "../components/SliderData";
import React from "react";

export const Home = () => {
    return (
        <ImageSlider slides={SliderData} />
    )
}

