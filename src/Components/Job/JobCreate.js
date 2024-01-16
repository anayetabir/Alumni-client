import React from 'react';
import jobs from '../img/jobs.svg';
import './Job.css';

const JobCreate = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'><img src={jobs} alt="" className='img-fluid' /></div>
                <div className='col-md-6'>
                    <div>
                        <h4>Job Post Create</h4>
                    </div>
                    <div className='formfield'>
                        <form action="">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder='abc' id="floatingInputDisabled"  />
                                <label htmlFor="floatingInputDisabled">Company</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="floatingTextareaDisabled" placeholder='abc' />
                                <label htmlFor="floatingTextareaDisabled">Job Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
                                <label htmlFor="floatingTextarea2Disabled">Position</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
                                <label htmlFor="floatingTextarea2Disabled">Job Location</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="floatingTextarea2Disabled" placeholder='abc' />
                                <label htmlFor="floatingTextarea2Disabled">Job Description</label>
                            </div>
                            <button class="btn btn-primary " type="submit">Post Job</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCreate;