import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../User.css';

const ArticleApprove = () => {
    const [Article, setArticle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])

    const handleApprove = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`http://localhost:5000/article/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ approval: 'approved' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Approved",
                                text: "Approved by Admin",
                                icon: "success"
                            });
                            const remaining = Article.filter(articles => articles._id !== _id);
                            const updated = Article.find(articles => articles._id === _id);
                            updated.approval = 'approved'
                            const newArticles = [updated, ...remaining];
                            setArticle(newArticles);
                        }
                    })
            }
        });


    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Decline it!"
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
                                title: "Decline!",
                                text: "This News has been deleted.",
                                icon: "success"
                            })
                            const remaining = Article.filter(NewNews => NewNews._id !== _id);
                            setArticle(remaining);
                        }
                    })

            }
        });

    }


    return (


        <div className=''>

            <div className="row">
                <div className="col-md-12">
                    <div className=" table-responsive">
                        <table className="table caption-top table-striped table-primary table-bordered border-secondary table-hover bg-shadow">
                            <caption className='fs-2 fw-bold'>Article</caption>
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Details</th>
                                    <th>date</th>
                                    <th>Status</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {Article.map(article => (

                                    <React.Fragment key={article._id}>
                                        {article.approval === 'WaitingForApprove' && <>
                                            {
                                                article.approval === 'approved' ?
                                                    <> </> : <>
                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{article.name}</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                dangerouslySetInnerHTML={{ __html: article.details }}
                                                            />
                                                            <td>12/3/2024</td>
                                                            <td>
                                                                <span className="text-out-back d-flex justify-content-center align-items-center text-danger mx-auto">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <button onClick={() => handleApprove(article._id)} type="submit" className='btn btn-outline-success'>Approve⇒</button>
                                                                    <button onClick={() => handleDelete(article._id)} className='btn btn-outline-danger'>Decline</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                            }
                                        </>}
                                    </React.Fragment>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ArticleApprove;