import React, { useContext, useEffect, useState } from 'react';
import './News.css';
import Head from '../Head/Head'
import Admin from '../Admins/Admin/Admin';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../FIrebase/firebase.config';
import { AuthContext } from '../../Context/UserContext';
import logo6 from "../img/logo6.svg"
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const News = () => {

    const { user } = useContext(AuthContext);

    const newsData = useLoaderData();

    const [news, setNews] = useState(newsData);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [])


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your Article has been deleted.",
                //     icon: "success"
                //   });
                fetch(`http://localhost:5000/news/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your News has been deleted.",
                                icon: "success"
                            })
                            const remaining = newsData.filter(NewNews => NewNews._id !== _id);
                            setNews(remaining);
                        }
                    })

            }
        });

    }



    return (
        <div>
            <Head></Head>

            <div className='news'>
                <Admin></Admin>
                <div className="main-content">
                    <div className="custom-container">
                        <div className="row">
                            <div className="col-sm-6 offset-sm-3">

                                {(user) ? <>

                                    {news.map(news =>


                                        <div className="post-block mt-5" key={news._id}>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex mb-3">
                                                    <div className="mr-2">
                                                        <a href="#" className="text-dark">
                                                            <img src={logo6} alt="" className="author-img" />
                                                        </a>
                                                    </div>
                                                    <div className='mm'>
                                                        <h5 className="mb-0" ><a href="#" className="text-dark">{news.name}</a></h5>
                                                    </div>
                                                </div>


                                {((user.uid === news.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                                                        <>
                                                            
                                                                <div className="post-block-user-options">
                                                                    <a href="#!" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                        <i className='fa-solid fa-ellipsis-vertical dark' aria-hidden="true"></i>
                                                                        {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby='triggerId'>
                                                                        <Link to={`/NewsUpdate/${news._id}`}>
                                                                            <button className="dropdown-item text-danger">Update
                                                                                <i className='bx bx-edit'></i>
                                                                            </button>
                                                                        </Link>
                                                                        <button onClick={() => handleDelete(news._id)} href="#" className="dropdown-item text-danger">Delete
                                                                            <i className='bx bxs-trash'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            
                                                        </>
                                                    )
                                                }

                                            </div>
                                            <div className="post-block-content mb-2 ">
                                                <p className='p'>
                                                    {news.post}
                                                </p>
                                                <img src="" alt="" />
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <div className="d-flex">
                                                        <span className="text-dark mr-2">Comment</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="post-block-comments">
                                                {/* Comment input */}
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder='Add your Comment' />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn btn-primary">
                                                            <i className='bx bxs-paper-plane' ></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* Comment content */}
                                                <div className="comment-view-box mb-3">
                                                    <div className="d-flex mb-2">
                                                        <img src="" alt="" className="author-img author-img-small mr-2" />
                                                        <div>
                                                            <h6 className="mb-1 text-dark xx">User-X</h6>
                                                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, omnis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </> : <></>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News;
