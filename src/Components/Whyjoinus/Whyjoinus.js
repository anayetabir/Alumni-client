import React, { useContext } from 'react';
import './Whyjoinus.css';
import { useNavigate } from 'react-router-dom';
import job from '../img/job.png';
import event from '../img/event.png'
import connect from '../img/connect.png'
import { AuthContext } from '../../Context/UserContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Whyjoinus = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const registerClicked = () => {
        navigate("/registration");
    };

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>  <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>

            <SwiperSlide> <div className='btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className='btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className=' btn-light'>
                <div className="card text-white h-100 bg mb-3 p-3 shadow">
                    <img src={event} alt='' className='card-img-top image1' />
                    <div className="card-header text-primary">Give Back</div>
                    <div className="card-body">
                        <p className="card-text text-black">Give Back to various causes through fundraising events.</p>
                    </div>
                </div>
            </div></SwiperSlide>

            <div className='container-fluid mt-5 mb-5'>
                <div>
                    <div className='p-5'>
                        <h1 className='text-center'>Join the CSE Alumni Association, LU Network, reconnect with your friends, classmates, seniors, and juniors from the Department of Computer Science & Engineering, LU. Grow your network & advance your career.</h1>
                    </div>
                    {user ?
                        <>

                        </> : <>
                            <button className='btn btn-primary' onClick={registerClicked}>Join Now</button>
                        </>
                    }
                </div>

            </div>
        </Swiper>

    );
};

export default Whyjoinus;