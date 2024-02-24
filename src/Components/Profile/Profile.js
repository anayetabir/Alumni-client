import React, { useContext, useEffect, useState } from 'react';
import Head from '../Head/Head';
import './Profile.css';
import { AuthContext } from '../../Context/UserContext';
import info from '../img/info.svg'
import { db } from '../../FIrebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useLoaderData } from 'react-router-dom';
import profilecard from '../img/profilecard.svg';


const Profile = () => {

    const { user } = useContext(AuthContext);

    const currentUser = useLoaderData();

    const handleUpdate = (_id) => {
        console.log(_id);
    }

    return (
        <div>
            <Head></Head>
            <div className="p-5 mt-5">
                <div>
                    <div>
                        <div>
                            <h3 className='text-center pb-5 fs-1'>User Information</h3>
                        </div>
                        <div className='row g-5'>
                            <div className='col-md-6'>
                                <div className='d-flex justify-content-center'>
                                    {currentUser.map(currentUser =>
                                        <div key={currentUser._id}>
                                            {currentUser.uid === user.uid ? <>
                                                <div>
                                                    <div className="p-card">
                                                        <div className="p-card__content">
                                                            <div className="p-card__date">  </div>
                                                            <div className="p-card__info">
                                                                <h5>Name: {currentUser.name}</h5>
                                                                <h5>Email: {currentUser.email}</h5>
                                                                <h5>Birth: {currentUser.dob}</h5>
                                                                <h5>Batch: {currentUser.batch}</h5>
                                                                <h5>Phone: {currentUser.phone}</h5>
                                                                <h5>Gender: {currentUser.gender}</h5>
                                                                <h5>Blood: {currentUser.blood}</h5>
                                                                <h5>City: {currentUser.city}</h5>
                                                                <Link to={`/ProfileUpdate/${currentUser._id}`}>
                                                                    {/* <button to={`/ProfileUpdate/${currentUser._id}`} type="submit" className="nextPage">Update Profile</button> */}
                                                                    <button onClick={() => handleUpdate(currentUser._id)} type="submit" className="nextPage">Update Profile</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : <></>}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <img src={profilecard} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;