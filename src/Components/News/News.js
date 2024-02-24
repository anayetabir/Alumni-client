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
import send from '../img/send.svg';

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

    //for auto fetching
    // useEffect(() => {
    //     const fetchNews = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5000/news');
    //             const data = await response.json();
    //             setNews(data);
    //         } catch (error) {
    //             console.error('Error fetching news:', error);
    //         }
    //     };

    //     // Fetch news initially
    //     fetchNews();

    //     // Set up interval for periodic polling
    //     const intervalId = setInterval(fetchNews, 1000); // Fetch every 10 seconds

    //     // Clean up interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, []);


    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             //   Swal.fire({
    //             //     title: "Deleted!",
    //             //     text: "Your Article has been deleted.",
    //             //     icon: "success"
    //             //   });
    //             fetch(`http://localhost:5000/news/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your News has been deleted.",
    //                             icon: "success"
    //                         })
    //                         const remaining = news.filter(NewNews => NewNews._id !== _id);
    //                         setNews(remaining);
    //                     }
    //                 })

    //         }
    //     });

    // }

    const [comments, setComments] = useState([]);

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
                // Delete the news
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
                            });

                            // Delete the associated comments
                            fetch(`http://localhost:5000/comments/${_id}`, {
                                method: 'DELETE'
                            })
                                .then(res => res.json())
                                .then(commentData => {
                                    console.log(commentData);
                                    // Handle the response as needed
                                });

                            // Update the state to remove the deleted news
                            const remaining = news.filter(NewNews => NewNews._id !== _id);
                            setNews(remaining);
                        }
                    });
            }
        });
    }





    const time = new Date();
    const commentSubmit = (event, newsId) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const createdAt = time.toLocaleString();
        const uid = user.uid;
        const name = user.displayName;
        const newComment = { comment, createdAt, name, uid, newsId };
        console.log(newComment);
        form.reset();


        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
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

                    }
                }))
    }


    // const [comments, setComments] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/comments')
    //         .then(res => res.json())
    //         .then(data => setComments(data))

    // }, [])



    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('http://localhost:5000/comments');
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        // Fetch comments initially
        fetchComments();

        // Set up interval for periodic polling
        const intervalId = setInterval(fetchComments, 1000); // Fetch every 1 seconds

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const deleteComment = _id => {
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
                fetch(`http://localhost:5000/comments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Comment has been deleted.",
                                icon: "success"
                            })
                            const remaining = comments.filter(com => com._id !== _id);
                            setComments(remaining);
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
                                                    {/* <div className="mr-2">
                                                        <a href="#" className="text-dark">
                                                            <img src={logo6} alt="" className="author-img" />
                                                        </a>
                                                    </div> */}
                                                    <div className='mm'>
                                                        <p className="mb-1 user-Name text-start" >{news.name}</p>
                                                        <p className='create-time'>{news.createdAt}</p>
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
                                                )}

                                            </div>
                                            <div className="post-block-content mb-2 ">
                                                <h4 className='text-start'> Topic: {news.title}</h4>
                                                <p className='p'

                                                    dangerouslySetInnerHTML={{ __html: news.post }}

                                                />
                                                <img src="" alt="" />
                                            </div>
                                            {/* <div className="mb-3">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <div className="d-flex">
                                                        <span className="text-dark mr-2">Comment</span>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <hr className='blank-line' />
                                            <div className="post-block-comments">
                                                {/* Comment input */}
                                                <form onSubmit={(event) => commentSubmit(event, news._id)}>
                                                    <div className="input-group mb-3">
                                                        <input name="comment" type="text" className="form-control transparent-input comment-area" placeholder="Add your Comment" />
                                                        <button type="submit" className="b-img"><img src={send} className='img-fluid' /></button>
                                                    </div>
                                                </form>
                                                {/* Comment content */}

                                                <div className="ms-5">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <div className="d-flex">
                                                            <span className="com mt-1">Comments...</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                {comments
                                                    .filter(comment => comment.newsId === news._id)
                                                    .map(comment => (
                                                        <div key={comment._id}>
                                                            <div className="comment-view-box mb-3">
                                                                <div className="mb-2">
                                                                    <div>
                                                                        <div>
                                                                            <div className='d-flex justify-content-between'>
                                                                                <h6 className="text-u">{comment.name}</h6>
                                                                                <div className='d-flex gap-2'>
                                                                                    <p className='text-c'>{comment.createdAt}</p>
                                                                                    <button onClick={() => deleteComment(comment._id, true)} type="button" className="btn-close"></button>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="mb-0 text-start">{comment.comment}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
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