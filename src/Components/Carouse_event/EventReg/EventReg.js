import React from 'react';
import './EventReg.css';


const EventReg = () => {



    return (
        <div className='mt=5 pt-5' >

            <div className='formfield'>

                <form >

                    <h1 className=''>Event Regisration Form</h1>



                    <div className='row'>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className='col-md-3 '>
                                <h5>Name:</h5>
                            </div>
                            <div className="form-floating mb-3 col-md-3 ">

                                <input type="text" className="form-control" name="name" placeholder='Name' id="floatingInputDisabled" />
                                <label htmlFor="floatingInputDisabled">Name</label>
                            </div>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className='col-md-3 '>
                                <h5>Student ID:</h5>
                            </div>
                            <div className="form-floating mb-3 col-md-3">
                                <input type="text" className="form-control" id="floatingTextareaDisabled" name="id" placeholder='Student ID' />
                                <label htmlFor="floatingTextareaDisabled">Student ID</label>
                            </div>

                        </div>

                    </div>




                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className='col-md-3 '>
                                <h5>Email:</h5>
                            </div>
                            <div className="form-floating mb-3 col-md-3">
                                <input type="text" className="form-control" id="floatingTextarea2Disabled" name="email" placeholder='Email' />
                                <label htmlFor="floatingTextarea2Disabled">Email</label>
                            </div>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className='col-md-3   '>
                                <h5>Transaction ID:</h5>
                            </div>
                            <div className="form-floating mb-3 col-md-3 ">
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