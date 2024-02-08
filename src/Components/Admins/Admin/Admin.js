import React, { useContext, useEffect, useRef, useState } from 'react';
import './Admin.css';
import { Timestamp, addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../FIrebase/firebase.config';
import { AuthContext } from '../../../Context/UserContext';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';

const Admin = () => {

    const { user } = useContext(AuthContext);


    const time = new Date();
    const editor = useRef(null);

    const [post, setPost] = useState('');
    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;

        if (!post.trim() || !title.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write something before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        const name = user.displayName;
        const uid = user.uid;
        const approval = 'WaitingForApprove';
        const createdAt = time.toLocaleString();

        const newspost = { title, post, name, uid, createdAt, approval };
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
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Post created Successfully, Wait for the Admins to Approve it',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        setPost('');
                    }
                }))

    };


    return (
        <div>
            {
                <>

                    <div className='mt-5 pt-5'>
                        <div className="d-flex">
                            <div className='mx-auto'>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Post</button>
                            </div>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Topic</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex justify-content-center">
                                            <form onSubmit={handlePostSubmit}>
                                                <div className="mb-3">
                                                    <label for="recipient-name" className="col-form-label">Title:</label>
                                                    <input type="text" className="form-control" id="recipient-name" name='title' />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="message-text" className="col-form-label">Details</label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={post}
                                                        onChange={setPost}
                                                    />
                                                    {/* <textarea className="form-control" id="message-text" name='post'></textarea> */}
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="Submit" className="btn btn-primary">Create</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>

            }

            {/*  */}
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open modal for</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New message to</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/*  */}


        </div>
    );
};

export default Admin;