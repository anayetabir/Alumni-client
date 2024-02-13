import React, { useContext } from 'react';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/UserContext';


const CreateEvent = () => {

    const time = new Date();
    const { user } = useContext(AuthContext);

    const handleCreateEvent = event => {

        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        const createdAt = time.toLocaleString();
        const uid = user.uid;
        const approval = 'WaitingForApprove';

        const newEvent = { title, type, description, startDate, endDate, createdAt, uid, approval }

        console.log(newEvent);

        // Send Data to the Server

        fetch('http://localhost:5000/event', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Event Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }
            })

    }


    return (
        <div>
            <Head></Head>

            <h1 className='mt-5 pt-5'>Welcome!</h1>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={covevent} alt="" className='img-fluid' />
                        </div>
                    <div className='col-md-6'>
                        <div>
                            <h4>New Event Create</h4>
                        </div>
                        <div className='formfield'>

                            <form onSubmit={handleCreateEvent}>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="title" placeholder='Event Title' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Event Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextareaDisabled" name="type" placeholder='Event Type' />
                                    <label htmlFor="floatingTextareaDisabled">Event Type</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextarea2Disabled" name="description" placeholder='Description' />
                                    <label htmlFor="floatingTextarea2Disabled">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" name="startDate" placeholder='Start Date' />
                                    <label htmlFor="floatingTextarea2Disabled">Start Date</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" name="endDate" placeholder='End Date' />
                                    <label htmlFor="floatingTextarea2Disabled">End Date</label>
                                </div>

                                <button class="btn btn-primary " type="submit">Create Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CreateEvent;