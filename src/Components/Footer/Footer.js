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

                            Established in 2001 by Ragib Ali, Leading University initially operated from rented spaces until its permanent campus opened in 2016. It faced controversy for not convening essential meetings from 2013 to 2014. In 2015, students protested against VAT on education by blocking roads. By 2018, it had four faculties with 4,692 students, mainly in business administration and engineering. In 2021, Qazi Azizul Mowla became vice-chancellor, but allegations of financial irregularities emerged, leading to a dispute between him and the board of trustees in 2023, prompting an investigation by the University Grants Commission.
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
                            <li><a href="#">Service</a></li>
                            <li><a href="#">FAQ</a></li>
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
                    <img src={payWith} className='footImg' alt="" />
                    <p>Created by LU CSE Alumni Association © 2024</p>
                </div>
            </footer>



        </div>
    );
};

export default Footer;