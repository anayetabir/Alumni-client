import React from 'react';
import sohidminar3 from '../img/loginarea.png';
import leading from '../img/shohidMinar3.jpg';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import reading from '../img/reading.svg'
import logo3 from '../img/logo3.svg';
import { useKeenSlider } from "keen-slider/react"
import homeAnimation1 from '../img/ProfileAnimation1.gif';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

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


const Login = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const registerClicked = () => {
        navigate("/registration");
    };

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
        <div>
            <div className='container-fluid box'>
                <div className='row'>

                    <div className='col-md-4 justify-content-center'>
                        <div className='mb-4 text-center mt-5 p-5'>
                            <div className='animated-text'>
                                <h3 className='log-text'>Join the CSE Alumni Association, Leading University to reconnect with your <span className='text-span'></span></h3>
                            </div>
                        </div>
                        {/* <form>
                            <div className="form-row">
                                <div className="col">
                                    <div className='submit-area'>
                                        <input type="email" className="form-control mx-auto" placeholder="Your Email" />
                                        <br />
                                        <input type="password" className="form-control mx-auto" placeholder="Your Password" />
                                        <br />
                                        <button type="submit" className="btn btn-primary mb-2 bsub">Submit</button>
                                        <div className="text-center">
                                            <p>Not a member? </p>
                                            <button type="submit" className="btn btn-light bsub" onClick={registerClicked}>Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> */}
                    </div>
                    <div className="col-md-8">
                        <img src={reading} alt="" className='img-fluid justify-content-end mt-3 p-3' />
                    </div>


                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center' >
                            <div className="wrapper-x homeStories1">
                                <div className="scene">
                                    <div className="carousel keen-slider" ref={sliderRef}>
                                        <div className="carousel__cell number-slide1 "> <img src={sohidminar3} className='img7' alt='...' /></div>
                                        <div className="carousel__cell number-slide2"><img src={leading} className='img7' alt='...' /></div>
                                        <div className="carousel__cell number-slide3">3</div>
                                        <div className="carousel__cell number-slide4">4</div>
                                        <div className="carousel__cell number-slide5">5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'  >
                            {/* <button class="shadow-btn login-btn">
                                CSE Alumni Association
                            </button> */}
                            <div class="home-card">
                                <div class="home-imgbox">
                                    <div class="home-img">
                                        <img src={homeAnimation1} alt="" />
                                    </div>
                                </div>
                                <div class="home-details">
                                    <h2 class="home-title">{user.displayName}</h2>
                                    <span class="home-caption"><span className='text-black'>ID : </span>2012020191</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    );
};

export default Login;