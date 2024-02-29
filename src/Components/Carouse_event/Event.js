import React, { useContext, useEffect, useState } from 'react';
import './Event.css';
import cevent from '../img/cevent.svg';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../Context/UserContext';

const Event = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    const { user } = useContext(AuthContext);
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
                fetch(`http://localhost:5000/event/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your event has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });


    }

    const HandleEventRead = _id => {
        console.log(_id);
    }





    // Create pairs of events for two events in one slide
    const pairedEvents = [];
    for (let i = 0; i < events.length; i += 1) {
        pairedEvents.push(events.slice(i, i + 1));
    }





    return (
        <div className='event'>
            <div className='w-100 mx-auto pt-5'>
                <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
                    <h1 className='fw-bold'>Events</h1>
                    <div className='carousel-inner evt-carousel'>
                        {pairedEvents.map((pair, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval='5000'>
                                <div className='container1 d-flex justify-content-center'>
                                    <div className='box-container '>
                                        {pair.map((event, eventIndex) => (
                                            <div className='box ' key={event._id}>
                                                <div className='image '>
                                                    <img src={event.photoUrl} className='img1 ' alt='...' />
                                                </div>
                                                <div className='content transition'>
                                                    <h3><b>{event.title}</b></h3>
                                                    <p className="description">{event.description}</p>

                                                    {/* <p>{event.description}</p> */}
                                                    <Link className='btn' to={`/readeventdetails/${event._id}`} onClick={() => HandleEventRead(event._id)}>
                                                        Register
                                                    </Link>
                                                    <div className='icons'>
                                                        <span>
                                                            <i className='fa-solid fa-calendar-days'></i>
                                                            {event.startDate}
                                                        </span>
                                                        <span>
                                                            <i className='fa-solid fa-user'></i>
                                                            {event.endDate}
                                                        </span>
                                                    </div>
                                                    {(user) ? (
                                                        ((user.uid === event.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                                                            <div>
                                                                <span className='deleteBtn'>
                                                                    <button onClick={() => handleDelete(event._id)} className='btn btn-outline-light'>
                                                                        <i className='fa-solid fa-trash dark'></i>
                                                                    </button>
                                                                </span>

                                                                <Link to={`/updateEvent/${event._id}`}>
                                                                    <button className='evn-btn btn btn-outline-light' >
                                                                        <i className="fa-regular fa-pen-to-square dark"></i>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        )
                                                    ) : null}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className='carousel-control-prev c-b' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next c-b' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>

                {(user) ? (
                    (userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                        <div className='d-flex'>
                            <div className='ms-auto'>
                                <div className='x'>
                                    <Link to={'/createEvent'}>
                                        <img src={cevent} alt='' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                ) : null}

            </div>
        </div>


    );
};

export default Event;