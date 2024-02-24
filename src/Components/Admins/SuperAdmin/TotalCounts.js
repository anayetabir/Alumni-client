import React, { useEffect, useState } from 'react';

const TotalCounts = () => {


    const [user, setUser] = useState([]);
    const [news, setNews] = useState([]);
    const [article, setArticle] = useState([]);
    const [stories, setStories] = useState([]);
    const [job, setJob] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJob(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/story')
            .then(res => res.json())
            .then(data => setStories(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);



    return (
        <div className=''>
            <div className='d-flex justify-content-center'>
                <div className='row g-5 cards-body-up'>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">Registered User</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {user.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100  custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">News</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {news.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">Article</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {article.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">Stories</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {stories.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-b">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">Job Post</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {job.length}</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 cards-body-low'>
                        <div class="card h-100 custom-card-body-p">
                            <div class="card-body">
                                <h5 class="card-title fs-4 fw-bold">Event</h5>
                                <br /><br />
                                <p class="card-text fs-5">Total: {events.length}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TotalCounts;