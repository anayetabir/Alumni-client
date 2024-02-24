import React, { useEffect, useState } from 'react';
import './HomeJobs.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const HomeJobs = () => {

    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJob(data))
    }, []);





    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth >= 768 ? 4 : 2);
        };

        handleResize(); // Initial call to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-3'>
            <h1>Latest Jobs</h1>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {job.map(job => (
                    <SwiperSlide key={job._id}>
                        <div className='btn-light'>
                            <div className="card text-white h-100 bg mb-3 p-3 shadow" style={{ height: '300px', overflow: 'hidden' }}>


                                <div className="card-header text-success">
                                    <h3><b>{job.name}</b></h3>
                                    <h6>{job.title}</h6>
                                </div>
                                <div className="card-body">
                                    <p className='text-black '><b>Location : <br />{job.location}</b></p>

                                    <p className="card-text text-black" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{job.description}</p>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

                <br />

            </Swiper>
        </div>
    );
};

export default HomeJobs;