import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Head from '../../Head/Head';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/UserContext';
import './applyjob.css';
import Footer from '../../Footer/Footer';

const ApplyJob = () => {
    const jobs = useLoaderData();

    const { user } = useContext(AuthContext);

    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const [applies, setApply] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apply')
            .then(res => res.json())
            .then(data => setApply(data))
    }, [])


    const navigate = useNavigate();

    // const handleCVClick = (cvUrl) => {
    //     const domain = cvUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
    //     const newUrl = '//' + domain;
    //     const newTab = window.open(newUrl, '_blank');
    //     //navigate(newTab.opener);
    // };
    const handleCVClick = (cvUrl) => {
        window.open(cvUrl, '_blank');
    };


    const JobApplySubmit = (event, jobsId) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const email = form.email.value;
        const cv = form.cv.value;
        const uid = user.uid;
        const newApply = { name, contact, email, cv, jobsId, uid };
        console.log(newApply);
        form.reset();

        if (!name.trim() || !contact.trim() || !email.trim() || !cv.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write all required data before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        fetch('http://localhost:5000/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Applied!',
                        text: 'Applied Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div>
            <Head></Head>
            <div className='bg-apply hv-100'>
                <div className='d-flex justify-content-center mt-5 p-5'>
                    <div className='bg-apply-board'>
                        <div className='text-start text-secondary fw-bold fs-4'>
                            {jobs.title}({jobs.position})
                        </div>
                        <div className='text-start text-dark'>
                            <p className='fw-bold'>Details:</p> 
                            {jobs.description}
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <div className='bg-apply-board-inner'>
                                <div className='text-start text-dark'>
                                    <p><span className='fw-bold'>Company Information: </span><br />{jobs.name}</p>
                                    <p><span className='fw-bold'>Address: </span><br />{jobs.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='stories-btn'>Apply Below <i class="fa-solid fa-arrow-down"></i></button>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='formfield mb-5 d-flex justify-content-center'>
                        <div className="evt-container">
                            <form onSubmit={(event) => JobApplySubmit(event, jobs._id)} className='evt-form'>
                                <div className="evt-card evt-cart">
                                    <b><h1 className="evt-title">Apply On {jobs.name}</h1></b>
                                    <hr className="evt-hr" />
                                    <div className="evt-steps">
                                        <div className="evt-step">
                                            <div>
                                                <span>Personal Details</span>
                                                <div className="">
                                                    <input type="text" placeholder="Enter Name" className="evt-input_field" name='name' />
                                                    <input type="number" placeholder="Enter Contact Number" className="evt-input_field" name='contact' />
                                                    <input type="email" placeholder="Enter Email" className="evt-input_field" name='email' />
                                                </div>
                                            </div>
                                            <hr className="evt-hr" />
                                            <div>
                                                <span>CV</span>
                                                <p>Upload Your CV to google Drive</p>
                                                <p>Please Make sure your drive link is public</p>
                                            </div>
                                            <hr className="evt-hr" />
                                            <div className="evt-promo">
                                                <span>CV URL:</span>
                                                <input type="text" placeholder="Enter your CV url" className="evt-input_field" name="cv" />
                                            </div>
                                            <hr className="evt-hr" />
                                        </div>
                                    </div>
                                </div>
                                <div className="evt-card evt-checkout">
                                    <div className="evt-footer d-flex justify-content-end">
                                        <button className="evt-checkout-btn">Apply</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>


                <div className='pt-5 mt-5'>
                    {user && user.uid === jobs.uid && (
                        <div className='mt-5 p-5'>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className=" table-responsive">
                                        <table className="table caption-top table-striped table-primary table-bordered border-secondary table-hover bg-shadow">
                                            <caption className='fs-2 fw-bold'>Applied Users</caption>
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Contact</th>
                                                    <th>CV</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {applies
                                                    .filter(apply => apply.jobsId === jobs._id)
                                                    .map(apply => (

                                                        <React.Fragment key={apply._id}>

                                                            <tr>
                                                                <td>
                                                                    <div className="">
                                                                        <span>{apply.name}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {apply.email}
                                                                </td>
                                                                <td>
                                                                    {apply.contact}
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">
                                                                        <button className='btn btn-secondary' onClick={() => handleCVClick(apply.cv)}>Click To Open CV</button>

                                                                        {/* <a href={apply.cv} target="_blank" rel="noopener noreferrer">Click To open CV</a> */}
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

                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ApplyJob;