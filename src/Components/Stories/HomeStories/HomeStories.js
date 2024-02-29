import React, { useContext, useEffect, useState } from 'react';


import './HomeStories.css';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const HomeStories = () => {

    const [stories, setStories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/story')
            .then(res => res.json())
            .then(data => setStories(data))
    }, []);



    return (
        <div>
            <h1 className='fw-bold mt-5 mb-4'>Stories</h1>

            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"

                >
                    {stories.map(story => (
                        <SwiperSlide key={story._id} className='' style={{ width: '500px', height: '550px' }}>
                            <img src={story.photo} className='img-fluid story-img' style={{ width: '500px', height: '500px' }} />
                            <h2>{story.title}</h2>
                        </SwiperSlide>

                    ))}


                </Swiper>
            </div>




        </div>
    );
};

export default HomeStories;