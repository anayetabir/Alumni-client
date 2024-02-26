import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Tooltip, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';


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

    const data = [
        { name: 'Registered User', value: user.length },
        { name: 'Forums', value: news.length },
        { name: 'Articles', value: article.length },
        { name: 'Stories', value: stories.length },
        { name: 'Job Post', value: job.length },
        { name: 'Events', value: events.length },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFac28', '#FF8042', '#7F7757', '#K49010'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


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
                                <h5 class="card-title fs-4 fw-bold">Forums</h5>
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

            <div className='mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height={600}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={200}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={30}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCounts;