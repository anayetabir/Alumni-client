import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import covevent from '../img/covevent.svg';
import Swal from 'sweetalert2';

const UpdateEvent = () => {

    const event = useLoaderData();

    const handleUpdateEvent = event => {

        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;

        const updatedEvent = { title, type, description, startDate, endDate }

        console.log(updatedEvent);

        // Send Data to the Server

        fetch(`http://localhost:5000/event/${event._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'Event Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
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
                    <div className='col-md-6'><img src={covevent} alt="" className='img-fluid' /></div>
                    <div className='col-md-6'>
                        <div>
                            <h4>Update {event.title}</h4>
                        </div>
                        <div className='formfield'>

                            <form onSubmit={handleUpdateEvent}>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="title" defaultValue={event.title} placeholder='Event Title' id="floatingInputDisabled" />
                                    <label htmlFor="floatingInputDisabled">Event Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextareaDisabled" name="type" defaultValue={event.type} placeholder='Event Type' />
                                    <label htmlFor="floatingTextareaDisabled">Event Type</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingTextarea2Disabled" name="description" defaultValue={event.description} placeholder='Description' />
                                    <label htmlFor="floatingTextarea2Disabled">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" name="startDate" defaultValue={event.startDate} placeholder='Start Date' />
                                    <label htmlFor="floatingTextarea2Disabled">Start Date</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="floatingTextarea2Disabled" name="endDate" defaultValue={event.endDate} placeholder='End Date' />
                                    <label htmlFor="floatingTextarea2Disabled">End Date</label>
                                </div>

                                <button class="btn btn-primary " type="submit" value="Update Event">Update Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default UpdateEvent;