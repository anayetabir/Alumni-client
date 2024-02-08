import React, { useContext } from 'react';
import sohidminar3 from '../../img/shohidMinar3.jpg';

import './homestories.css';


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



    return (
        <div>
            <h1>Stories</h1>

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
                    <SwiperSlide className='' style={{ width: '700px' }}>
                        <img src={sohidminar3} className='img-fluid' style={{ width: '700px' }}/>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '700px' }}>
                        <img src={sohidminar3} className='img-fluid' style={{ width: '700px' }}/>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '700px' }}>
                        <img src={sohidminar3} className='img-fluid' style={{ width: '700px' }}/>
                    </SwiperSlide>
                    <SwiperSlide className='' style={{ width: '700px' }}>
                        <img src={sohidminar3} className='img-fluid' style={{ width: '700px' }}/>
                    </SwiperSlide>
                </Swiper>
            </div>




        </div>
    );
};

export default HomeStories;