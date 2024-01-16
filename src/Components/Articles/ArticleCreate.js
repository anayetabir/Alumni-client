import React from 'react';
import articleimg from '../img/articleimg.svg';
import './Articles.css';
import Swal from 'sweetalert2';

const ArticleCreate = () => {

    const handleAddArticle = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;

        const newArticle = { title, details };

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
        <div className='m-5 p-5'>
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
                            <div className="form-floating ">
                                <textarea className="form-control" name="details" cols="5" rows="5"></textarea>
                                <label className='upperCaseHeader' htmlFor="floatingTextarea">Details</label>
                            </div>
                            <div>
                                <button className='article-btn' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ArticleCreate;