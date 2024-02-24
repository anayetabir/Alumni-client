import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';

const NewsUpdate = () => {

    const news = useLoaderData();
    const editor = useRef(null);
    const [post, setPost] = useState('');
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;


        // console.log('news created: ', post);

        const newsUpdate = { title, post };
        //console.log('news created: ', newspost);
        //form.reset();


        fetch(`http://localhost:5000/news/${news._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'News Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch((error) => {
                console.error('Error updating news:', error);
                // You can handle the error here, e.g., show an alert or log it.
            });

    }

    return (
        <div>
            <div>
                <div className='mt-5 pt-5'>
                    <div className="d-flex">
                        <div className="container-fluid w-75">
                            <h3>Update Post</h3>
                            <form onSubmit={handleUpdate}>
                                {/* <div className="form-group"> */}
                                {/* <textarea className="form-control" name='post' defaultValue={news.post} rows="10"></textarea> */}

                                {/* <JoditEditor
                                        ref={editor}
                                        value={news.post}
                                        onChange={setPost}
                                    />
                                </div> */}

                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="recipient-name" name='title' defaultValue={news.title} />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Details</label>
                                    <JoditEditor
                                        ref={editor}
                                        value={news.post}
                                        onChange={setPost}
                                    />
                                    {/* <textarea className="form-control" id="message-text" name='post'></textarea> */}
                                </div>


                                <div className="mt-2 d-flex justify-content-end">
                                    <button type="submit " className='btn btn-primary me-2'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsUpdate;