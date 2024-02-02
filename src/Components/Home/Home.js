import React from 'react';
import Login from '../LoginArea/Login';

import Whyjoinus from '../Whyjoinus/Whyjoinus';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import { useNavigate } from 'react-router-dom';
import Event from '../Carouse_event/Event';
import HomeStories from '../../Home_Stories/HomeStories';

const Home = () => {

    // const navigate = useNavigate();
    // navigate('/');

    return (
        <div>
            <Head></Head>
            <Login></Login>
            <Event></Event>
            <Whyjoinus></Whyjoinus>
            <HomeStories></HomeStories> 
            <Footer></Footer>
            
        </div>
    );
};

export default Home;