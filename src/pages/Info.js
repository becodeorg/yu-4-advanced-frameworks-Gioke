import {ImageSlider} from "../components/ImageSlider";
import {SliderData} from "../components/SliderData";
import React from "react";

export const Info = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
        </div>
    )
}