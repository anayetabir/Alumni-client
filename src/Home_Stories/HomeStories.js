import React, { useContext } from 'react';
import './HomeStories.css';
import sohidminar3 from '../Components/img/shohidMinar3.jpg';

import { useKeenSlider } from "keen-slider/react"

const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}







const HomeStories = () => {

    const [sliderRef] = useKeenSlider( 
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <div className='body1'>
            <h1>Stories</h1>

            <div className="wrapper homeStories1">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        <div className="carousel__cell number-slide1 "> <img src={sohidminar3} className='img7' alt='...' /></div>
                        <div className="carousel__cell number-slide2">2</div>
                        <div className="carousel__cell number-slide3">3</div>
                        <div className="carousel__cell number-slide4">4</div>
                        <div className="carousel__cell number-slide5">5</div>
                        <div className="carousel__cell number-slide6">6</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeStories;