import React, { useContext, useEffect, useState } from 'react';
import './Head.css'
import profile from '../img/profile.svg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { db } from '../../FIrebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import logo6 from '../img/logo6.svg';

const Head = () => {



    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [])




    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nb ">
                {/* <a className="navbar-brand" href="#">CSE-AA-LU</a> */}
                <Link to={'/'} className="navbar-brand mx-3 fs-5">
                    <img src={logo6} className='img-fluid' alt='' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav ">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="#">Businesses</a> */}
                            <NavLink to={'/businesses'} className="nav-link" activeClassName="active">Businesses</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Job-Opportunity</a> */}
                            <NavLink to={'/job'} className="nav-link" activeClassName="active">Job-Opportunity</NavLink>
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="#">Articles</a> */}
                            <NavLink to={'/articles'} className="nav-link" activeClassName="active">Articles</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/news">News</a> */}
                            <NavLink to={'/news'} className="nav-link" activeClassName="active">News</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Stories</a> */}
                            <NavLink to={'/story'} className="nav-link" activeClassName="active">Stories</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Committee</a> */}
                            <NavLink to={'/committee'} className="nav-link" activeClassName="active">Committee</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <NavLink to={'/about'} className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Contact</a> */}
                            <NavLink to={'/contact'} className="nav-link" activeClassName="active">Contact</NavLink>
                        </li>
                        {/* {user && <li className="nav-item">
                           
                            <Link to={'/profile'} className="nav-link">Profile</Link>
                        </li>} */}


                    </ul>

                    <div className="ms-auto my-2 my-lg-0 mx-5">

                        {
                            (user) ?
                                <>
                                    <div className="btn-group dropstart">
                                        <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={profile} alt="" />
                                        </button>
                                        <div className='mx-auto'>
                                            <div className="dropdown-menu" >
                                                <span className="dropdown-item">{(user && user.displayName) || (userData && userData.name)}</span>
                                                <div role="separator" className="dropdown-divider"></div>
                                                <Link to={'/profile'} className="dropdown-item">Profile</Link>
                                                <div role="separator" className="dropdown-divider"></div>

                                                {/* {
                                                    // user.uid === 'VpecidIgQHdNcnSnEADFjha2BF83' 
                                                    userData && userData.role === 'superAdmin' && <>
                                                        <Link to={'/superadmin'} className="dropdown-item">Admin Dashboard</Link>
                                                        <div role="separator" className="dropdown-divider"></div>
                                                    </>
                                                } */}

                                                {/* {
                                                    userData.map(userData => 
                                                        <div key={userData._id}>
                                                        {userData.role==='superAdmin' ? <>
                                                            <Link to={'/superadmin'} className="dropdown-item">Admin Dashboard</Link>
                                                            <div role="separator" className="dropdown-divider"></div>
                                                        </> : <> </>}
                                                        </div>
                                                    )
                                                } */}
                                                {
                                                    userData.find(userDoc => userDoc.uid === user.uid && (userDoc.role === 'superAdmin' || userDoc.role === 'admin')) && (
                                                        <>
                                                            <Link to={'/superadmin'} className="dropdown-item">Admin Dashboard</Link>
                                                            <div role="separator" className="dropdown-divider"></div>
                                                        </>
                                                    )
                                                }

                                                <button onClick={handleLogOut} className="btn btn-outline-danger mx-2" type="submit">Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </> : <Link to="/login"><button className="btn btn-outline-success mx-5" type="submit">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Head;