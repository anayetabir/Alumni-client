import React from 'react';
import './Contact.css'
import error from '../img/error.gif';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import contact from '../img/contact.svg';
import whatsapp from '../img/whatsapp.svg';
import email from '../img/email.svg';
import person from '../img/person.svg';


const Contact = () => {
    return (
        <div>
            <Head></Head>
            <div className='bg-contact vh-100'>
                <div className="container-fluid justify-content-center mt-5 p-5">
                    <div className="justify-content-center text-center">

                        <div className="mt-4 justify-content-center row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center">
                                    <div className='bg-get-board d-flex justify-content-center align-items-center'>
                                        <div>
                                            <div className='fs-1 fw-bold text-start'>
                                                Get In Touch
                                            </div>
                                            <div className='fs-5 text-start text-body-secondary mb-5'>
                                                We are here for you! How can we help?
                                            </div>
                                            <div className='d-flex align-items-center gap-3 mb-4'>
                                                <div><img src={whatsapp} alt="" /></div>
                                                <div className='text-start'>
                                                    <div>Phone Number</div>
                                                    <div>+8801-*********</div>
                                                </div>
                                            </div>

                                            <div className='d-flex align-items-center gap-3 mb-4'>
                                                <div><img src={email} alt="" /></div>
                                                <div className='text-start'>
                                                    <div>Email</div>
                                                    <div>lucse_alumni@gmail.com</div>
                                                </div>
                                            </div>

                                            <div className='d-flex align-items-center gap-3'>
                                                <div><img src={person} alt="" /></div>
                                                <div className='text-start'>
                                                    <div>Join Us On Facebook Page</div>
                                                    <div>www.facebook/alumni.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-center">
                                    <img className='img-fluid' src={contact} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Contact;