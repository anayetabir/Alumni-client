import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const EventApprove = () => {
    const [Events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then(res => res.json())
            .then(data => setEvents(data))
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
                fetch(`http://localhost:5000/event/${_id}`, {
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
                            const remaining = Events.filter(events => events._id !== _id);
                            const updated = Events.find(events => events._id === _id);
                            updated.approval = 'approved'
                            const newEvents = [updated, ...remaining];
                            setEvents(newEvents);
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
                fetch(`http://localhost:5000/event/${_id}`, {
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
                            const remaining = Events.filter(NewEvents => NewEvents._id !== _id);
                            setEvents(remaining);
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
                            <caption className='fs-2 fw-bold'>Event</caption>
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
                                {Events.map(event => (

                                    <React.Fragment key={event._id}>
                                        {event.approval === 'WaitingForApprove' && <>
                                            {
                                                event.approval === 'approved' ?
                                                    <> </> : <>
                                                        <tr>
                                                            <td>
                                                                <div className="">
                                                                    <span>{event.title}</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                dangerouslySetInnerHTML={{ __html: event.description }}
                                                            />
                                                            <td>{event.createdAt}</td>
                                                            <td>
                                                                <span className="text-out-back d-flex justify-content-center align-items-center text-danger mx-auto">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <button onClick={() => handleApprove(event._id)} type="submit" className='btn btn-outline-success'>Approve⇒</button>
                                                                    <button onClick={() => handleDelete(event._id)} className='btn btn-outline-danger'>Decline</button>
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

export default EventApprove;