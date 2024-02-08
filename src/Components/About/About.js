import React from 'react';
import './About.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import abir3 from '../img/abir3.png';
import nafim3 from '../img/nafim3.png';
import prbSir from '../img/prbSir.png';
import julfa from '../img/julfa.png'
import about1 from '../img/about1.svg';
import about2 from '../img/about2.svg';
import about3 from '../img/about3.svg';




const About = () => {
    return (
        <div>
            <Head></Head>
            <div className='about-bg'>
                <div className='pt-5 mt-5'>
                    <div className='d-flex text-start px-5'>
                        <div className='fs-1 fw-bold text-body-secondary'>ABOUT US</div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-center'>
                        <div className='px-5 mx-5 w-75'>
                            <div className='row mb-5'>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Mission</div>
                                    <div>The mission of the CSE Alumni Association is to cultivate a vibrant community of computer science and engineering graduates from Leading University. We are dedicated to fostering lifelong connections among our members, supporting their professional development, and contributing to the advancement of the computer science field. Through networking opportunities, educational initiatives, and collaborative partnerships, we aim to empower our alumni to thrive in their careers, make a positive impact on society, and maintain a strong connection to our alma mater's.</div>
                                </div>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about1} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <hr />
                            <div className='row mb-5'>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about2} alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Story</div>
                                    <div>Our Alumni Association is a vibrant community of past graduates, united by shared experiences and a commitment to ongoing success. Through events and networking, we foster connections and mentor future leaders. Join us in celebrating our alma mater's legacy and shaping the narrative of our alumni community. Stay connected for updates and opportunities to make a lasting impact.</div>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-md-7 col-lg-7 text-start'>
                                    <div className='fs-2 fw-bold mb-3'>Our Objectives</div>
                                    <div>• Endorse the image of the CSE department. <br />
                                        • Enhance and promote friendship, unity and brotherhoods among the former students. <br />
                                        • Help and support the Alumni, friends, and families. <br />
                                        • Organise re-union, seminar, workshop, pleasure trips for the Alumni. <br />
                                        • Publish journals, souvenir for the Alumni. <br />
                                        • Organise social and cultural events. <br />
                                        • Provide voluntary services to promote welfare of the Leading University CSE Alumni</div>
                                </div>
                                <div className='col-md-5 col-lg-5'>
                                    <img src={about3} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">

                    <h1 className='abourH1 fs-1 fw-bold text-secondary'>Our Team</h1>

                    <div className="team">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={prbSir} className='about_img' alt="" />
                                    </div>
                                    <h3>Prithwiraj Bhattacharjee</h3>
                                    <p className='role'>Advisor</p>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={abir3} className='about_img' alt="" />
                                    </div>
                                    <h3>Anayet Abir</h3>
                                    <p className='role'>Web Developer</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={nafim3} className='about_img' alt="" />
                                    </div>
                                    <h3>Dewan Nafim</h3>
                                    <p className='role'>Web Developer</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="team_member">
                                    <div >
                                        <img src={julfa} className='about_img' alt="" />
                                    </div>
                                    <h3>Mafruda Julfa</h3>
                                    <p className='role'>Web Developer</p>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut id ipsam error velit sed in voluptatem, pariatur hic autem consectetur laboriosam, quia earum, reprehenderit voluptatum minima vero! Odit, inventore.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default About;