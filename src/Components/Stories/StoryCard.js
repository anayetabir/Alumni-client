import React, { useContext, useEffect, useState } from 'react';
import story from '../img/story.svg';
import Swal from 'sweetalert2';
import './Stories.css' // Import your CSS file for additional styling
import { AuthContext } from '../../Context/UserContext';

const StoryCard = ({ story, setStories, stories }) => {
  const { _id, title, photo, details } = story;

  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUserData(data))

  }, [])

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


        fetch(`http://localhost:5000/story/${_id}`, {
          method: "DELETE",

        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = stories.filter(s => s._id !== _id);
              setStories(remaining);

            }

          })

      }
    });


    console.log(_id);
  }

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <div className='s-box scard-container'>
          <div className="stories-card mb-3 position-relative">
            <div className="row g-0">
              <div className="col-md-4 p-3 mt-2">
                <img src={photo} className="img-fluid object-fit-md-contain" alt="..." />
              </div>
              <div className="col-md-8 mt-3">
                <div className="stories-body text-start">
                  <h5 className="stories-title link-primaryz"><u>{title}</u></h5>
                  <p className="stories-text  mt-2 ">{details}</p>
                  <p ><small className="stories-date">{story.createdAt}</small></p>
                </div>
              </div>
            </div>
            {(user) ? <>
              {((user.uid === story.uid) || userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin'))) && (
                <>
                  <div className="dropdown" style={{ position: 'absolute', top: '0', right: '0' }}>
                    <button className=" btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <div className="stories-dropdown dropdown-menu p-4" aria-labelledby="dropdownMenuButton">
                      <button
                        onClick={() => handleDelete(_id)}
                        className="dropdown-item delete">Delete</button>
                      <button

                        className="dropdown-item update">Update</button>
                    </div>
                  </div>
                </>
              )}
            </> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;