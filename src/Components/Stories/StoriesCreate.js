import React, { useContext, useState } from 'react';
// import story from '../img/story.png';
import Swal from 'sweetalert2';
import story from '../img/profilecard.svg';
import { AuthContext } from '../../Context/UserContext';

const StoriesCreate = () => {

    const [fillError, setFillError] = useState('');;

    const { user } = useContext(AuthContext);
    const time = new Date();
    const handleAddStory = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const uid = user.uid;
        const createdAt = time.toLocaleString();

        const newStory = { photo, title, details, uid,createdAt }

        if (title.trim() === '') {
            setFillError('Please fill up all the fields.');
            return;
        }
        console.log(newStory);

        fetch('http://localhost:5000/story', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStory)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Story Added!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset();
                    setFillError('');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })

    }
    return (
        <div className='b-stories'>
            <div className='m-5 p-5'>
                <div className="row">

                    <div className="col-md-6 mt-5">
                        <img src={story} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        {/* 30% width column */}
                        <div className='left-part neumorphic-card' >
                            <form onSubmit={handleAddStory}>


                                <h5 className='form-h5'>Create Stories</h5>


                                <div className="form-floating title">
                                    <input className="form-control" type="text" name="title" />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Title</label>

                                </div>
                                <div className="form-floating ">
                                    <input className="form-control" type="text" name="photo" />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Photo URL</label>

                                </div>
                                <div className="form-floating ">
                                    <input className="form-control" type="text" name="details" />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Details</label>

                                </div>

                                <div>
                                    <p className='text-danger'><small>{fillError}</small></p>
                                    <button className='stories-btn' type='submit'>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default StoriesCreate;