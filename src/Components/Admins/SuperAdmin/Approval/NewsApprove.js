import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const NewsApprove = () => {

    const [News, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
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
                fetch(`http://localhost:5000/news/${_id}`, {
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
                            const remaining = News.filter(news => news._id !== _id);
                            const updated = News.find(news => news._id === _id);
                            updated.approval = 'approved'
                            const newNews = [updated, ...remaining];
                            setNews(newNews);
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
                fetch(`http://localhost:5000/news/${_id}`, {
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
                            const remaining = News.filter(NewNews => NewNews._id !== _id);
                            setNews(remaining);
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
                        
                            <caption className='fs-2 fw-bold'>News</caption>
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
                                {News.map(news => (

                                    <React.Fragment key={news._id}>
                                        {news.approval === 'WaitingForApprove' && <>
                                            {
                                                news.approval === 'approved' ?
                                                    <> </> : <>
                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{news.name}</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                dangerouslySetInnerHTML={{ __html: news.post }}
                                                            />
                                                            <td>{news.createdAt}</td>
                                                            <td>
                                                                <span className="text-out-back d-flex justify-content-center align-items-center text-danger mx-auto">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <button onClick={() => handleApprove(news._id)} type="submit" className='btn btn-outline-success'>Approve⇒</button>
                                                                    <button onClick={() => handleDelete(news._id)} className='btn btn-outline-danger'>Decline</button>
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

export default NewsApprove;