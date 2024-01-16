import React from 'react';
import './About.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import abir3 from '../img/abir3.png';
import nafim3 from '../img/nafim3.png';
import prbSir from '../img/prbSir.png';
import julfa from '../img/julfa.png'




const About = () => {
    return (
        <div>
            <Head></Head>
            <div className='mt-5 m-3 pt-5'>
                <h1>Dedication</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio itaque dolor saepe officiis? Odit nisi aperiam exercitationem qui doloribus alias quam, nemo quos! Perferendis sint totam reiciendis quis iste.</h5>
            </div>
            <div className="p-5">
                <h1>About</h1>
                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nostrum minima, optio sequi enim aut! Repellendus provident velit illo nam similique autem quidem enim aliquam consectetur debitis architecto, ut eum.</h5>
            </div>




            <div className="wrapper">

                <h1 className='abourH1'>Our Team</h1>

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



            <Footer></Footer>

        </div>
    );
};

export default About;