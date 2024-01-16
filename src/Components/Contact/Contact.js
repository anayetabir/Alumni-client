import React from 'react';
import './Contact.module.css'
import error from '../img/error.gif';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        <div>
            <Head></Head>

            <div className="container-fluid justify-content-center mt-5 p-5">
                <div className="justify-content-center text-center">

                    <h3 className="text-center fs-1">
                        Contact
                    </h3>

                    <div className="mt-4 justify-content-center row">
                        <div className="col-md-8">
                            <div className="text-center">
                                <p>
                                    <strong>CSE Alumni Association</strong>
                                </p>
                                <p>
                                    CSE Alumni Association, Leading University, RAB, 3rd Floor, Sylhet - 3100
                                </p>
                                <p><br /></p>
                                <p><strong>Email:</strong></p>
                                <p>
                                    <a href="">lus@ac.bd</a>
                                </p>
                                <p><br /></p>
                                <p><strong>Mobile: </strong></p>
                                <p>01711-xxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;