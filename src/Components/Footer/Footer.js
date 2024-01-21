import React from 'react';
import './Footer.css';
import payWith from '../img/payWith.png';


const Footer = () => {
    return (
        <div>
            <footer >



                <div className='footer_info' >
                    <div className="footer_width about">
                        <h2>About  <div className='underline'><span></span></div></h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus labore harum quisquam accusantium facere eos non dolores aspernatur odio soluta animi, nobis veniam qui vero, iste enim doloribus nostrum?
                        </p>
                        <div className='social-media'>
                            <ul>
                                <li><a className='soi' ><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a className='soi' ><i className="fa-brands fa-whatsapp"></i></a></li>
                                <li><a className='soi' ><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>

                    </div>

                    <div className="footer_width link">

                        <h2>Quick Link <div className='underline'><span></span></div></h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>


                    </div>


                    <div className="footer_width contact">
                        <h2>Contact <div className='underline'><span></span></div></h2>
                        <ul>
                            <li>
                                <span className='footer_icon1'><i class="fa-solid fa-location-dot"></i></span>
                                <p className='text-white'>
                                    Leading University
                                    Ragibnagar, South Surma, <br /> Sylhet-3112
                                </p>

                            </li>
                            <li>
                                <span className='footer_icon2'><i class="fa-solid fa-envelope"></i></span>
                                <p className='text-white'>
                                    Email: <a href="info@lus.ac.bd">info@lus.ac.bd</a>
                                </p>

                            </li>
                            <li>
                                <span className='footer_icon3'><i class="fa-solid fa-phone-volume"></i></span>
                                <p className='text-white'>
                                    Phone: 01313084499.
                                </p>

                            </li>
                        </ul>

                    </div>



                </div>



                <div>
                    <img src={payWith} className='footImg' alt="" />
                    <p>Created by LU CSE Alumni Association © 2024</p>
                </div>
            </footer>



        </div>
    );
};

export default Footer;