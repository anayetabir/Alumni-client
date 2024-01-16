import React, { useContext, useEffect, useState } from 'react';
import Head from '../Head/Head';
import './Profile.module.css';
import { AuthContext } from '../../Context/UserContext';
import info from '../img/info.svg'
import { db } from '../../FIrebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useLoaderData } from 'react-router-dom';


const Profile = () => {

    const { user } = useContext(AuthContext);

    const currentUser = useLoaderData();

    const handleUpdate = (_id) => {
        console.log(_id);
    }

    return (
        <div>
            <Head></Head>
            <div className="p-5 mt-5 align-item-center">
                <div className="container-fluid justify-content-center">
                    <div className="row">
                        <div className="col-md-6 justify-content-center">
                            <h3 className='text-center'>User Information</h3>
                            {currentUser.map(currentUser =>

                                <div key={currentUser._id}>
                                    {currentUser.uid === user.uid ? <>
                                        <div>
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" name='Email' defaultValue={currentUser.email} />
                                                    <label htmlFor="floatingInput">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='name' defaultValue={currentUser.name} />
                                                    <label htmlFor="floatingPassword">Name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='dob' defaultValue={currentUser.dob} />
                                                    <label htmlFor="floatingPassword">Date of Birth</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='batch' defaultValue={currentUser.batch} />
                                                    <label htmlFor="floatingPassword">Batch</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='phone' defaultValue={currentUser.phone} />
                                                    <label htmlFor="floatingPassword">Phone Number</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='gender' defaultValue={currentUser.gender} />
                                                    <label htmlFor="floatingPassword">Gender</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='blood' defaultValue={currentUser.blood} />
                                                    <label htmlFor="floatingPassword">Blood Group</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingPassword" name='city' defaultValue={currentUser.city} />
                                                    <label htmlFor="floatingPassword">City</label>
                                                </div>
                                                {/* <input type="submit" value="Submit" className="nextPage" /> */}
                                                <Link to={`/ProfileUpdate/${currentUser._id}`}>
                                                    {/* <button to={`/ProfileUpdate/${currentUser._id}`} type="submit" className="nextPage">Update Profile</button> */}
                                                    <button onClick={() => handleUpdate(currentUser._id)} type="submit" className="nextPage">Update Profile</button>
                                                </Link>
                                            </form>
                                        </div>
                                    </> : <></>}
                                </div>

                            )}

                        </div>
                        <div className="col-md-6 align-item-center">
                            <img src={info} alt="" className="img-fluid justify-content-end mt-3 m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;