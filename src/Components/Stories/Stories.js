import React, { useContext, useState } from 'react';

import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import './Stories.css';
import story from '../img/story.svg';
import StoriesCreate from './StoriesCreate';
import {useLoaderData} from'react-router-dom';
import StoryCard from './StoryCard';
import { AuthContext } from '../../Context/UserContext';

const Stories = () => {
    const loadedStories =useLoaderData();
    const [stories,setStories]=useState(loadedStories);

    const { user } = useContext(AuthContext);

    return (
        <div className='b-stories'>
            <Head></Head>
            <div>
            {(user) ? <>
                <StoriesCreate></StoriesCreate>
            </> : <></>}

            <div className="s-back">
                <div className='s-p'>
                    <div className="s-label mx-5 mb-5">
                        <div className="s-text">Stories</div>
                    </div>
                    <div>
                    {
                        stories.map(story => <StoryCard 
                        key={story._id}
                        story={story}
                        stories={stories}
                        setStories={setStories}></StoryCard>)
                    }
                    </div>
                    </div>
                    {/* <div className='d-flex justify-content-center'>
                        <div className='s-box'>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4 p-3">
                                        <img src={story} class="img-fluid object-fit-md-contain" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body text-start">
                                            <h5 class="card-title link-primaryz"><u>Developing Leaders at Southwest Airlines: DBU Alum Dr. David Reyes</u></h5>
                                            <p class="card-text">After just eight months at the organization, Dr. Reyes accepted the challenge of a new role in managing the Enterprise Leadership Delivery Team at Southwest Airlines.</p>
                                            <p class="card-text"><small class="text-body-secondary">January 12,2024</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default Stories;