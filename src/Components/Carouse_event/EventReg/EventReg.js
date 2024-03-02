import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


import './EventReg.css';
import Head from '../../Head/Head';
import Footer from '../../Footer/Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/UserContext';


const EventReg = () => {

    const { user } = useContext(AuthContext);

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);


    const [reg, setReg] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reg')
            .then(res => res.json())
            .then(data => setReg(data))
    }, [])

    const events = useLoaderData();

    const EventRegSubmit = (event, eventsId) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const batchNo = form.batchNo.value;
        const studentId = form.studentId.value;
        const transactionID = form.transactionID.value;

        const newEventReg = { name, email, batchNo, studentId, transactionID, eventsId };
        console.log(newEventReg);

        if (!name.trim() || !email.trim() || !studentId.trim() || !transactionID.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write all required data before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        form.reset();


        fetch(`http://localhost:5000/reg`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEventReg)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Registration Successfully Done',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })

                    }
                }))

    }



    return (
        <div>


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


            <div className='formfield mb-5 d-flex justify-content-center'>

                {/* <form onSubmit={(event) => EventRegSubmit(event, events._id)} >

                    <div className='row'>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating  ">

                                <input type="text" className="form-control" name="name" placeholder='Name' id="floatingInputDisabled" />
                                <label htmlFor="floatingInputDisabled">Name</label>
                            </div>

                        </div>

                        <div className='col-md-6 d-flex align-items-center justify-content-center'>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingTextareaDisabled" name="studentId" placeholder='Student ID' />
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
                </form> */}
                <div className="evt-container">
                    <form onSubmit={(event) => EventRegSubmit(event, events._id)} className='evt-form'>
                        <div className="evt-card evt-cart">
                            <b><h1 className="evt-title">Registration</h1></b>
                            <hr className="evt-hr" />
                            <div className="evt-steps">
                                <div className="evt-step">
                                    <div>
                                        <span>Details</span>
                                        <div className="">
                                            <input type="text" placeholder="Enter a Name" className="evt-input_field" name='name' />
                                            <input type="text" placeholder="Enter a Batch No." className="evt-input_field" name='batchNo' />
                                            <input type="number" placeholder="Enter a Student ID" className="evt-input_field" name='studentId' />
                                            <input type="email" placeholder="Enter a Email" className="evt-input_field" name='email' />
                                        </div>
                                    </div>
                                    <hr className="evt-hr" />
                                    <div>
                                        <span>PAYMENT METHOD</span>
                                        <p>Bkash</p>
                                        <p>12345678901</p>
                                    </div>
                                    <hr className="evt-hr" />
                                    <div className="evt-promo">
                                        <span>Transaction ID</span>
                                        <input type="text" placeholder="Enter a Promo Code" className="evt-input_field" name="transactionID" />
                                    </div>
                                    <hr className="evt-hr" />
                                </div>
                            </div>
                        </div>
                        <div className="evt-card evt-checkout">
                            <div className="evt-footer d-flex justify-content-end">
                                <button className="evt-checkout-btn">Register</button>
                            </div>
                        </div>
                    </form>
                </div>






            </div>


            {(user) && <>
                {users.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'admin' || userDoc.role === 'superAdmin')) ? <>
                    <div className='mt-5 p-5'>

                        <div className="row">
                            <div className="col-md-12">
                                <div className=" table-responsive">
                                    <table className="table caption-top table-striped table-primary table-bordered border-secondary table-hover bg-shadow">
                                        <caption className='fs-2 fw-bold'>Event Registration List</caption>
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Batch No.</th>
                                                <th>Student ID</th>
                                                <th>Transaction ID</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {reg
                                                .filter(regs => regs.eventsId === events._id)
                                                .map(regs => (

                                                    <React.Fragment key={regs._id}>

                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{regs.name}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {regs.email}
                                                            </td>
                                                            <td>
                                                                {regs.batchNo}
                                                            </td>
                                                            <td>
                                                                {regs.studentId}
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">
                                                                    {regs.transactionID}
                                                                </span>
                                                            </td>
                                                        </tr>


                                                    </React.Fragment>

                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>

                </>}
            </>}


            <Footer></Footer>


        </div >

    );

};

export default EventReg;