import React, { useContext, useState } from 'react';

import Head from '../Head/Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

import './Job.css'
import Footer from '../Footer/Footer';
import JobCreate from './JobCreate';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';
import { AuthContext } from '../../Context/UserContext';


const Job = () => {


    const { user } = useContext(AuthContext);
    const loadedJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadedJobs);

    // const{_id,name,title,location,description,position}=job;
    // const handleDelete = _id =>{
    //     console.log(_id);

    // }

    // {
    //     id: 1,
    //     title: 'Frontend Developer',
    //     company: 'ABC Tech',
    //     location: 'New York, NY',
    //     image: 'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg', // Replace with the actual image URL
    //     description: 'We are looking for a skilled frontend developer...',
    // },
    // {
    //     id: 2,
    //     title: 'Backend Developer',
    //     company: 'XYZ Solutions',
    //     location: 'San Francisco, CA',
    //     image: 'https://www.liveabout.com/thmb/z_RXiDK2cxFRjPzyWxBiAQLpWx8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d.png', // Replace with the actual image URL
    //     description: 'Join our backend development team and work...',
    // },
    // {
    //     id: 3,
    //     title: 'UI/UX Designer',
    //     company: 'Design Co.',
    //     location: 'London, UK',
    //     image: 'https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2021/01/difference_between_ux_ui.webp', // Replace with the actual image URL
    //     description: 'Create stunning and user-friendly UI/UX designs...',
    // }


    // const [expandedJobs, setExpandedJobs] = useState([]);

    // // Function to handle "Read More" button click
    //   const handleReadMoreClick = (jobId) => {
    //     if (expandedJobs.includes(jobId)) {

    //         // Job is already expanded, so remove it from the list
    //         setExpandedJobs(expandedJobs.filter((id) => id !== jobId));
    //     } else {
    //         // Job is not expanded, so add it to the list
    //         setExpandedJobs([...expandedJobs, jobId]);
    //     }
    // };
    return (
        <div>


            <Head></Head>

            <h2 className='top mt-10'>Hot Jobs!   <FontAwesomeIcon icon={faFire} className="fire-icon" /></h2>
            {(user) ? <>
                <JobCreate></JobCreate>
            </> : <></>}

            <div className="grid-container">

                {
                    jobs.map(job => <JobCard key={job._id} job={job}
                        jobs={jobs}
                        setJobs={setJobs}></JobCard>)
                }

            </div>

            <Footer></Footer>
        </div>
    );
};
export default Job;