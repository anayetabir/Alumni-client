import React, { useState } from 'react';
import './Articles.css';
import error from '../img/error.gif';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import news from '../img/loginarea.png';
import ArticleCreate from './ArticleCreate';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Articles = () => {


    const article = useLoaderData();

    const [articles, setArticles] = useState(article);

    const handleReadMode = _id => { console.log(_id) }

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
                fetch(`http://localhost:5000/article/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Article has been deleted.",
                                icon: "success"
                            })
                            const remaining = articles.filter(art => art._id !== _id);
                            setArticles(remaining);
                        }
                    })

            }
        });

    }

    return (
        <div>
            <Head></Head>
            <ArticleCreate></ArticleCreate>

            <section className="blog">
                {/* Heading */}
                <div className="blog-heading">
                    <span>Leading University</span>
                    <h3>Articles</h3>
                </div>

                <h1>Total Article: {article.length}</h1>


                {/* blog-container */}
                <div className="blog-container">
                    {/* box-1 */}
                    {articles.map(article =>

                        <div key={article._id}>
                            <div className="blog-box">
                                {/* image */}
                                <div className="blog-img">
                                    <img src={news} alt="" />
                                </div>
                                {/* menu */}
                                <div className="d-flex justify-content-end mt-1 ">
                                    <a href="#!" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className='fa-solid fa-ellipsis-vertical dark' aria-hidden="true"></i>
                                        {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby='triggerId'>
                                        <Link to={`/ArticleUpdate/${article._id}`}>
                                        <button className="dropdown-item text-danger">Update
                                            <i className='bx bx-edit'></i>
                                        </button>
                                        </Link>
                                        <button onClick={() => handleDelete(article._id)} className="dropdown-item text-danger">Delete
                                            <i className='bx bxs-trash'></i>
                                        </button>
                                    </div>
                                </div>
                                {/*Text */}
                                <div className="blog-text">
                                    <span>4 Auguest 2023/Web Design</span>
                                    <a href="" className='blog-title'>{article.title}</a>
                                    <p>{article.details}</p>
                                    {/* <a href="" onClick={()=> handleReadMode(article._id)}>Read More</a> */}
                                    <button onClick={() => handleReadMode(article._id)}>Read More</button>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

            </section>






            <Footer></Footer>
        </div>
    );
};

export default Articles;