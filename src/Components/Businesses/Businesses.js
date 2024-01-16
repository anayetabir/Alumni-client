import React from 'react';
import error from '../img/error.gif';
import Head from '../Head/Head';


const Businesses = () => {
    return (
        <div>
            <Head></Head>
            <div className='bg-black vh-100'>
                <img src={error} className='img-fluid' alt="" />
                <h1 className='text-primary'>Coming Soon.................</h1>
                <h2 className='text-secondary'>Page Under Development</h2>
            </div>
        </div>
    );
};

export default Businesses;