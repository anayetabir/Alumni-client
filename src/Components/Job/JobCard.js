import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Context/UserContext';


const JobCard = ({ job, jobs, setJobs }) => {

  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUserData(data))

  }, [])

  const { _id, name, title, description, location, position, uid } = job;

  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/job/${_id}`, {
          method: "DELETE",

        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            if (data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = jobs.filter(j => j._id !== _id)
              setJobs(remaining);

            }

          })

      }
    });


    console.log(_id);
  }
  const handleApply = (_id) => {
    console.log(_id);
  }


  return (

    <div className=''>

      <div className="grid-container ">
        <Link to={`/jobapply/${_id}`}>
          <div className="grid-item w-100 job-card" onClick={() => { handleApply(_id) }}>
            <h3 className="job-name"> {job.name} </h3>
            <h3 className="job-title">Hiring {job.title}!</h3>
            <p className="job-position">Position:  {job.position}</p>
            <p className="job-location">Location: {job.location}</p>
            <p className="job-description" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{job.description}</p>



            {(user) ? <>
              {((user.uid === job.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                <>

                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/JobUpdates/${_id}`}>
                      <button type="button" className="btn btn-outline-primary">
                        <FontAwesomeIcon icon={faPencilAlt} /> Edit
                      </button>
                    </Link>

                    <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(_id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>

                </>
              )}
            </> : <></>}

          </div>
        </Link>



      </div>

    </div>





  );
};

export default JobCard;