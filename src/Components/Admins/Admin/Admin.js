import React, { useContext, useEffect, useState } from 'react';
import './Admin.css';
import { Timestamp, addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../FIrebase/firebase.config';
import { AuthContext } from '../../../Context/UserContext';
import Swal from 'sweetalert2';

const Admin = () => {

    const { user } = useContext(AuthContext);



    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;

        // console.log('news created: ', post);
       
        const name = user.displayName;
        const uid = user.uid;

        const newspost = { post, name, uid};
        console.log('news created: ', newspost);
        form.reset();


        fetch('http://localhost:5000/news', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newspost)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Post created  Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                }))

    };




    return (
        <div>
            {
                <>
                    <div className='mt-5 pt-5'>
                        <div className="d-flex">
                            <div className="container-fluid w-75">
                                <h3>Create Post</h3>
                                <form onSubmit={handlePostSubmit}>
                                    <div className="form-group">
                                        <textarea className="form-control" name='post' placeholder='Write your news........' rows="5"></textarea>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-end">
                                        <button type="submit " className='btn btn-primary me-2'>create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                
                </>
            }
        </div>
    );
};

export default Admin;