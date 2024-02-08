import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const JobApprove = () => {




    const [Job, setJob] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJob(data))
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
                fetch(`http://localhost:5000/job/${_id}`, {
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
                            const remaining = Job.filter(jobs => jobs._id !== _id);
                            const updated = Job.find(jobs => jobs._id === _id);
                            updated.approval = 'approved'
                            const newJobs = [updated, ...remaining];
                            setJob(newJobs);
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
                fetch(`http://localhost:5000/job/${_id}`, {
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
                            const remaining = Job.filter(NewNews => NewNews._id !== _id);
                            setJob(remaining);
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
                            <caption className='fs-2 fw-bold'>Jobs</caption>
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
                                {Job.map(job => (

                                    <React.Fragment key={job._id}>
                                        {job.approval === 'WaitingForApprove' && <>
                                            {
                                                job.approval === 'approved' ?
                                                    <> </> : <>
                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{job.title}</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                dangerouslySetInnerHTML={{ __html: job.position }}
                                                            />
                                                            <td>12/3/2024</td>
                                                            <td>
                                                                <span className="text-out-back d-flex justify-content-center align-items-center text-danger mx-auto">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <button onClick={() => handleApprove(job._id)} type="submit" className='btn btn-outline-success'>Approve⇒</button>
                                                                    <button onClick={() => handleDelete(job._id)} className='btn btn-outline-danger'>Decline</button>
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

export default JobApprove;