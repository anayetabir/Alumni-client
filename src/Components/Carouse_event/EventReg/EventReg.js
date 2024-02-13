import React from 'react';
import { useLoaderData } from 'react-router-dom';

import './EventReg.css';


const EventReg = () => {

    const events = useLoaderData();





    return (
        <div className='mt=5 pt-5' >


            <div>
                <h1>Title:{events.title} </h1>
                <h3>Description:{events.description} </h3>
            </div>







            <div className='formfield'>

                <form >

                    <h1 className='eventReg-head'>Event Regisration Form</h1>



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

        </div>
    );
};

export default EventReg;