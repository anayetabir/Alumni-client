import React from 'react';
import error from '../img/error.gif';
import Head from '../Head/Head';
const Error = () => {
    return (
        <div>
            <Head></Head>
            <div className='bg-black vh-100'>
                <img src={error} className='img-fluid' alt="" />
                <h2 className='text-secondary'>Page Not Found!</h2>
            </div>
        </div>
    );
};

export default Error;