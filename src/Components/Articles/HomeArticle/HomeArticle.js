import React, { useEffect, useState } from 'react';
import './HomeArticle.css';

import job from '../../img/job.png';
import event from '../../img/loginarea.png';
import picnic from '../../img/picnic.jpg';
import connect from '../../img/connect.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const HomeArticle = () => {
    // const isMediumToLarge = window.innerWidth >= 768;

    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
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
            <h1 className='fw-bold mt-5 mb-4'>Latest Articles</h1>
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
                {article.map(article => (
                    <SwiperSlide key={article._id}>
                        <div className='btn-light'>
                            <div className="card text-white h-100 bg mb-3  shadow" style={{ height: '300px', overflow: 'hidden' }}>
                                <img src={article.photoUrl} alt='' className='card-img-top image1 blog-img p-2' />
                                <div className="card-header text-primary text-truncate">
                                    <b>{article.title}</b>
                                </div>

                                <div className="card-body">

                                    <p className="card-text text-black" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.details}</p>
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

export default HomeArticle;