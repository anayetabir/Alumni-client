// import React, { useEffect, useState } from 'react';
// import './Event.css';
// import sohidminar3 from '../img/shohidMinar3.jpg';
// import cevent from '../img/cevent.svg';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Event = () => {
//     const [events, setEvents] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         fetch('http://localhost:5000/event')
//             .then((res) => res.json())
//             .then((data) => setEvents(data));
//     }, []);

//     const handleDelete = (_id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/event/${_id}`, {
//                     method: 'DELETE',
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire({
//                                 title: 'Deleted!',
//                                 text: 'Your event has been deleted.',
//                                 icon: 'success',
//                             });
//                         }
//                     });
//             }
//         });
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
//     };

//     return (
//         <div className="event">
//             <div className="p-5 m-5 w-100 mx-auto">
//                 <div className="container">
//                     <div className="box-container">
//                         {events.map((event, index) => (
//                             <div
//                                 key={event._id}
//                                 className={`box ${index === currentIndex ? 'active' : ''}`}
//                                 style={{ display: index === currentIndex ? 'block' : 'none' }}
//                             >
//                                 <div className="image">
//                                     <img src={sohidminar3} className="img1" alt="..." />
//                                 </div>
//                                 <div className="content transition">
//                                     <h3>{event.title}</h3>
//                                     <p>{event.description}</p>
//                                     <a href="" className="btn">
//                                         read more
//                                     </a>
//                                     <div className="icons">
//                                         <span>
//                                             <i className="fa-solid fa-calendar-days"></i>
//                                             {event.startDate}
//                                         </span>
//                                         <span>
//                                             <i className="fa-solid fa-user"></i>
//                                             {event.endDate}
//                                         </span>
//                                     </div>
//                                     <div>
//                                         <span className="deleteBtn">
//                                             <i onClick={() => handleDelete(event._id)} className="fa-solid fa-trash"></i>
//                                         </span>
//                                         <Link to={`/updateEvent/${event._id}`}>
//                                             <button>
//                                                 <i className="fa-solid fa-pen-to-square"></i>
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="d-flex mt-3">
//                     <button className="carousel-control-prev c-b" type="button" onClick={handlePrev}>
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next c-b ms-auto" type="button" onClick={handleNext}>
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//                 <div className="d-flex mt-3">
//                     <div className="ms-auto">
//                         <div className="x">
//                             <Link to={'/createEvent'}>
//                                 <img src={cevent} alt="" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Event;




import React, { useContext, useEffect, useState } from 'react';
import './Event.css';
import loginarea from '../img/loginarea.png';
import sohidminar3 from '../img/shohidMinar3.jpg';
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

    const HandleEventRead =_id=>{
        console.log(_id);
    }





    // Create pairs of events for two events in one slide
    const pairedEvents = [];
    for (let i = 0; i < events.length; i += 2) {
        pairedEvents.push(events.slice(i, i + 2));
    }





    return (
        <div className='event'>
            <div className='p-5 m-5 w-100 mx-auto'>
                <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
                    <div className='carousel-indicators'>
                        {/* Add indicators based on the pairedEvents array length */}
                        {pairedEvents.map((pair, index) => (
                            <button
                                key={index}
                                type='button'
                                data-bs-target='#carouselExampleCaptions'
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    <div className='carousel-inner'>
                        {pairedEvents.map((pair, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval='5000'>
                                <div className='container'>
                                    <div className='box-container'>
                                        {pair.map((event) => (

                                            <div className='box' key={event._id}>
                                                
                                                    <div className='image '>
                                                        <img src={sohidminar3} className='img1 ' alt='...' />
                                                    </div>
                                                    <div className='content transition'>
                                                        <h3>{event.title}</h3>
                                                        <p>{event.description}</p>
                                                        <Link className='btn' to={`/readeventdetails/${event._id}`} onClick={() => HandleEventRead(event._id)}>
                                                            Read more
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
                                                        {(user) ? <>
                                                            {((user.uid === event.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                                                                <>
                                                                    <div>
                                                                        <span className='deleteBtn'>
                                                                            <i onClick={() => handleDelete(event._id)} className='fa-solid fa-trash'></i>
                                                                        </span>

                                                                        <Link to={`/updateEvent/${event._id}`}>

                                                                            <button className='evn-btn' >
                                                                                <i class="fa-regular fa-pen-to-square"></i>
                                                                            </button>
                                                                        </Link>

                                                                    </div>
                                                                </>
                                                            )}
                                                        </> : <></>}
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


                {(user) ? <>
                    <div className='d-flex'>
                        <div className='ms-auto'>
                            <div className='x'>
                                <Link to={'/createEvent'}>
                                    <img src={cevent} alt='' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </> : <></>}

            </div>
        </div>
    );
};

export default Event;
