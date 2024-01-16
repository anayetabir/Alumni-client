import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ArticleUpdate = () => {

    const article = useLoaderData();


    const handleUpdateArticle = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;

        const updateArticle = { title, details };

        fetch(`http://localhost:5000/article/${article._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArticle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'Article Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div>
            <h1>Update Article</h1>
            <h2>Title:{article.title}</h2>
            <div className='m-5 p-5'>
                <div className="row">

                    {/* <div className="col-md-6">
                        <img src={articleimg} alt="" className='img-fluid' />
                    </div> */}
                    <div className="col-md-6">
                        {/* 30% width column */}
                        <div className='left-part'>
                            <form onSubmit={handleUpdateArticle}>


                                <h5 className='form-h5'>Create Articles</h5>


                                <div className="form-floating title">
                                    <input className="form-control" type="text" name="title" defaultValue={article.title} />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Title</label>

                                </div>
                                <div className="form-floating ">
                                    <textarea className="form-control" name="details" cols="5" rows="5" defaultValue={article.details}></textarea>
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Details</label>
                                </div>
                                <div>
                                    <button className='article-btn' type='submit'>Update Article</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ArticleUpdate;