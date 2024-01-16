import React from 'react';
 
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import './Stories.css'
 
const Stories = () => {
 
    return (
        <div>
            <Head></Head>
            <section className="">
 
                <div className="container-fluid ">
                    <h1 className="fs-16 fs-md-4 font-weight-medium text-start">Latest Stories</h1>
                    <div className="icon">⚠️
                    <h1 className="notFound">No Stories Found</h1>
                    <p>Sorry, there is no stories available at the moment.</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
 
};
 
export default Stories;