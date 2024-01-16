import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../../FIrebase/firebase.config';
import Head from '../../Head/Head';
import { AuthContext } from '../../../Context/UserContext';
import Error from '../../Error/Error';
import { Link, useLoaderData } from 'react-router-dom';

const SuperAdmin = () => {



    const { user } = useContext(AuthContext);
    const userData = useLoaderData();





    return (
        <div>
            <Head></Head>

            <div className="mt-5 p-5">
                {userData.find(userDoc => userDoc.uid === user.uid && userDoc.role === 'superAdmin') ? <>
                    <div className="table-responsive">
                        <table className="table caption-top table-striped table-primary table-bordered border-secondary">
                            <caption className='fs-2'>All Users Data</caption>
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Batch</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Change Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((users) => (
                                    <tr key={users._id}>
                                        <th scope="row">{ }</th>
                                        <td>{users.name}</td>
                                        <td>{users.city}</td>
                                        <td>{users.batch}</td>
                                        <td>{users.email}</td>
                                        <td>{users.phone}</td>
                                        <td>{users.dob}</td>
                                        <td>{users.gender}</td>
                                        <td>{users.blood}</td>
                                        <td>{users.role}</td>
                                        <td>
                                            <Link to={`/changerole/${users._id}`}>
                                                <button className='btn btn-primary btn-sm'>Change</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </> : <>
                    <Error></Error></>}
            </div>
        </div>
    );
};

export default SuperAdmin;