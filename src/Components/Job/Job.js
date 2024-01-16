import React, { useState } from 'react';
 
import Head from '../Head/Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
 
import './Job.css'
import Footer from '../Footer/Footer';
import JobCreate from './JobCreate';
 
const Job = () => {
    const job = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'ABC Tech',
            location: 'New York, NY',
            image: 'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg', // Replace with the actual image URL
            description: 'We are looking for a skilled frontend developer...',
        },
        {
            id: 2,
            title: 'Backend Developer',
            company: 'XYZ Solutions',
            location: 'San Francisco, CA',
            image: 'https://www.liveabout.com/thmb/z_RXiDK2cxFRjPzyWxBiAQLpWx8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d.png', // Replace with the actual image URL
            description: 'Join our backend development team and work...',
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            company: 'Design Co.',
            location: 'London, UK',
            image: 'https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2021/01/difference_between_ux_ui.webp', // Replace with the actual image URL
            description: 'Create stunning and user-friendly UI/UX designs...',
        }
       
    ];
    const [expandedJobs, setExpandedJobs] = useState([]);
 
    // Function to handle "Read More" button click
      const handleReadMoreClick = (jobId) => {
        if (expandedJobs.includes(jobId)) {
 
            // Job is already expanded, so remove it from the list
            setExpandedJobs(expandedJobs.filter((id) => id !== jobId));
        } else {
            // Job is not expanded, so add it to the list
            setExpandedJobs([...expandedJobs, jobId]);
        }
    };
    return (
        <div>
 
 
            <Head></Head>
 
            <h2 className='top'>Hot Jobs!  <FontAwesomeIcon icon={faFire} className="fire-icon" /></h2>
            <JobCreate></JobCreate>
 
            <div className="grid-container">
                
 
                {job.map((job) => (
                    <div key={job.id} className="grid-item w-100">
                        <img src={job.image} alt={job.title} className="job-image" />
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-company">{job.company}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="job-location">{job.location}</p>
                        {expandedJobs.includes(job.id) ? (
                            <>
                                <p className="job-description">{job.description}</p>
                                <button className='btn btn-primary readMore'>
                                    Apply Now
                                </button>
                            </>
                        ) : (
                            <button onClick={() => handleReadMoreClick(job.id)} className='btn btn-primary readMore'>
                                Read More
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Job;