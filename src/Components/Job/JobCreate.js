import jobs from '../img/jobs.svg';
import './Job.css';
import Swal from 'sweetalert2';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';

const JobCreate = () => {


    const { user } = useContext(AuthContext);

    const [fillError, setFillError] = useState('');



    const time = new Date();

    const handleAddJob = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const title = form.title.value;
        const position = form.position.value;
        const location = form.location.value;
        const description = form.description.value;
        const username = user.displayName;
        const uid = user.uid;
        const createdAt = time.toLocaleString();
        const approval = 'WaitingForApprove';

        const newJob = { name, title, position, location, description, username, uid, approval, createdAt };

        if (name.trim() === '' || title.trim() === '' || position.trim() === '' || location.trim() === '' || description.trim() === '') {
            setFillError('Please fill up all the fields.');
            return;
        }

        // Sending data to the server

        fetch('http://localhost:5000/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Job Added!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    // Clear the form and reset the error message
                    form.reset();
                    setFillError('');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch(error => {
                console.error('Error adding job:', error);
                // Handle error display or logging here
            });
    }




    return (
        <div>
            <div className='row'>
                <div className='col-md-6'><img src={jobs} alt="" className='img-fluid' /></div>
                <div className='col-md-6'>
                    <div>
                        <h4> Create Job Post </h4>
                    </div>
                    <div className='formfield d-flex justify-content-center '>
                        <form onSubmit={handleAddJob}>
                            <div className="form-floating mb-3">
                                <input type="text" name="name" className="form-control" placeholder='Company' id="floatingInputDisabled" />
                                <label htmlFor="floatingInputDisabled">Company</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name="title" className="form-control" id="floatingTextareaDisabled" placeholder='Title' />
                                <label htmlFor="floatingTextareaDisabled">Job Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name="position" className="form-control" id="floatingTextarea2Disabled" placeholder='Position' />
                                <label htmlFor="floatingTextarea2Disabled">Position</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name="location" className="form-control" id="floatingTextarea2Disabled" placeholder='Location' />
                                <label htmlFor="floatingTextarea2Disabled">Job Location</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="description" className="form-control" id="floatingTextarea2Disabled" placeholder='Description' />
                                <label htmlFor="floatingTextarea2Disabled">Job Description</label>
                            </div>
                            <p className='text-danger'><small>{fillError}</small></p>
                            <button className="btn btn-primary " type="submit">Post </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCreate;