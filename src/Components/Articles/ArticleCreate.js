import React, { useContext, useRef, useState } from 'react';
import articleimg from '../img/articleimg.svg';
import './Articles.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/UserContext';
import JoditEditor from 'jodit-react';

const ArticleCreate = () => {

    const { user } = useContext(AuthContext);

    const [details, setDetails] = useState('');

    const editor = useRef(null);


    const time = new Date();
    const handleAddArticle = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        // const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const name = user.displayName;
        const uid = user.uid;
        const createdAt = time.toLocaleString();
        const approval = 'WaitingForApprove';

        const newArticle = { title, details, photoUrl, name, uid, approval, createdAt };

        form.reset();

        if (!title.trim() || !details.trim()) {
            // If post value is empty or contains only whitespace
            Swal.fire({
                title: 'Error!',
                text: 'Please write something before submitting.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        fetch('http://localhost:5000/article', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArticle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'ADDED!',
                        text: 'Article Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div className='mt-5 pt-5'>
            <div className="row">

                <div className="col-md-6">
                    <img src={articleimg} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6">
                    {/* 30% width column */}
                    <div className='left-part'>
                        <form onSubmit={handleAddArticle}>


                            <h5 className='form-h5'>Create Articles</h5>


                            <div className="form-floating title">
                                <input className="form-control" type="text" name="title" />
                                <label className='upperCaseHeader' htmlFor="floatingTextarea">Title</label>

                            </div>

                            <div className="mb-4">
                            <label>Description</label>
                                <JoditEditor
                                    ref={editor}
                                    value={details}
                                    onChange={setDetails}
                                />
                            </div>
                            <div className="form-floating ">
                                <input className="form-control" type="text" name="photoUrl" />
                                <label className='upperCaseHeader' htmlFor="floatingTextarea">Photo URL</label>

                            </div>

                            <div>
                                <button className='stories-btn' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ArticleCreate;