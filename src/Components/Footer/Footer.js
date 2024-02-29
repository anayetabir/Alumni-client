import React from 'react';
import './Footer.css';
import payWith from '../img/payWith.png';


const Footer = () => {
    return (
        <div>
            <footer >



                <div className='footer_info' >
                    <div className="footer_width about">
                        <h2>About  <div className='underline1'><span className='ft-span'></span></div></h2>
                        <p className='text-white'>
                            We are the official alumni association for the Department of Computer Science and Engineering, Leading University. The association was established in May 2023 with a mission to create a platform that will provide networking opportunities for ex-students. The association started its journey by establishing the first convenor committee on 8 July 2023.
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

                        <h2>Quick Link <div className='underline1'><span className='ft-span'></span></div></h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>


                    </div>


                    <div className="footer_width contact1">
                        <h2> Contact <div className='underline1'><span className='ft-span'></span></div></h2>
                        <ul>
                            <li>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className='footer_icon1'><i class="fa-solid fa-location-dot"></i></span>
                                    <div className='text-white'>
                                        Leading University
                                        Ragibnagar, South Surma, <br /> Sylhet-3112
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className='d-flex align-items-center'>
                                    <span className='footer_icon2'><i class="fa-solid fa-envelope"></i></span>
                                    <div className='text-white'>
                                        Email: <a href="info@lus.ac.bd">info@lus.ac.bd</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span className='footer_icon3'><i class="fa-solid fa-phone-volume"></i></span>
                                <div className='text-white'>
                                    Phone: 01313084499.
                                </div>

                            </li>
                        </ul>

                    </div>



                </div>



                <div>
                    {/* <img src={payWith} className='footImg' alt="" /> */}
                    <p>Created by LU CSE Alumni Association © 2024</p>
                </div>
            </footer>



        </div>
    );
};

export default Footer;