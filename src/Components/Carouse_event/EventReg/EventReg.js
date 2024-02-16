import React from 'react';
import { useLoaderData } from 'react-router-dom';


import './EventReg.css';
import Head from '../../Head/Head';
import Footer from '../../Footer/Footer';


const EventReg = () => {

    const events = useLoaderData();





    return (
        <div  >


            <Head></Head>

            <div className='mt-5 pt-5'>

                <div className='top-head'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='black-label  '>
                            <span className='black-title'><b>{events.title} </b></span>

                            <p className='black-title-p '>{events.description} </p>

                        </div>
                    </div>

                    <div className=' pb-1'>
                        <div className='prix  '>
                            <div>
                                <span className='prix-span'><b><span className='crt'>End :</span> {events.endDate}</b></span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span className='crt'>Regisration Below</span>
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                <h1 className='eventReg-head fw-semibold'>Event Regisration Form</h1>
            </div>


            <div className='formfield mb-5'>

                <form >





                    <div className='row'>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating  ">

                                <input type="text" className="form-control" name="name" placeholder='Name' id="floatingInputDisabled" />
                                <label htmlFor="floatingInputDisabled">Name</label>
                            </div>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingTextareaDisabled" name="id" placeholder='Student ID' />
                                <label htmlFor="floatingTextareaDisabled">Student ID</label>
                            </div>

                        </div>

                    </div>




                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating ">
                                <input type="text" className="form-control" id="floatingTextarea2Disabled" name="email" placeholder='Email' />
                                <label htmlFor="floatingTextarea2Disabled">Email</label>
                            </div>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating  ">
                                <input className="form-control" id="floatingTextarea2Disabled" name="transactionID" placeholder='Transaction ID' />
                                <label htmlFor="floatingTextarea2Disabled">Transaction ID</label>
                            </div>

                        </div>

                    </div>







                    <button class="btn btn-primary " type="submit">Register Event</button>
                </form>
            </div>
            <Footer></Footer>


        </div>

    );

};

export default EventReg;