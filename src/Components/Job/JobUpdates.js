import React from 'react';
import Head from '../Head/Head';
import Swal from 'sweetalert2';
import jobs from '../img/jobs.svg';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import './Job.css'

const JobUpdates = () => {
    const job = useLoaderData();
    const { _id, name, title, description, location, position } = job;


    const handleUpdateJob = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const title = form.title.value;
        const position = form.position.value;
        const location = form.location.value;
        const description = form.description.value;


        const updatedJob = { name, title, position, location, description }
        console.log(updatedJob);

        //Sending data to the sever

        fetch(`http://localhost:5000/job/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCOUNT > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                }

            })



    }


    return (
        <div className='job-top'>
            <Head></Head>
            <div>
                <h2 className='top pt-4 mb-4 mt-12'>Update Job <FontAwesomeIcon icon={faFireFlameCurved} className="fire-icon" /></h2>

                <div className='row m-30'>
                    <div className='col-md-6 m-30'><img src={jobs} alt="" className='img-fluid' /></div>
                    <div className='col-md-6'>
                        <div>
                            <h4 className='job-Update'>Update Job</h4>
                        </div>
                        <div className='formfield d-flex justify-content-center'>
                            <form onSubmit={handleUpdateJob}>
                                <div className="form-floating mb-3">
                                    <input defaultValue={name} type="text" name="name" className="form-control" placeholder='Company' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Company</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input defaultValue={title} name="title" className="form-control" id="floatingTextareaDisabled" placeholder='Title' />
                                    <label htmlFor="floatingTextareaDisabled">Job Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="position" defaultValue={position} className="form-control" id="floatingTextarea2Disabled" placeholder='Position' />
                                    <label htmlFor="floatingTextarea2Disabled">Position</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="location" className="form-control" defaultValue={location} id="floatingTextarea2Disabled" placeholder='Location' />
                                    <label htmlFor="floatingTextarea2Disabled">Job Location</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" defaultValue={description} name="description" className="form-control" id="floatingTextarea2Disabled" placeholder='Description' />
                                    <label htmlFor="floatingTextarea2Disabled">Job Description</label>
                                </div>
                                <button className="btn btn-primary " type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobUpdates;