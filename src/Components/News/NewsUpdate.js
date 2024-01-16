import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewsUpdate = () => {

    const news = useLoaderData();


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;

        // console.log('news created: ', post);

        const newsUpdate = { post };
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
                                <div className="form-group">
                                    <textarea className="form-control" name='post' defaultValue={news.post} rows="10"></textarea>
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