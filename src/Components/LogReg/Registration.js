import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';
import { AuthContext } from '../../Context/UserContext';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { db } from '../../FIrebase/firebase.config';
import { collection, doc, setDoc } from 'firebase/firestore';
import logo6 from '../img/logo6.svg';
// import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

// import app from '../../FIrebase/firestore.config';


const Registration = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRegisterClick = () => {
        navigate("/");
    };


    const { user, createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    // console.log(createUser);
    const [passerror, setpassError] = useState('');
    const [emailerror, setemailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [fillError, setFillError] = useState('');


    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // const db = getFirestore();
    const usersCollectionRef = collection(db, 'users');


    const handleFormSubmitReg = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        const city = form.city.value;
        const batch = form.batch.value;
        const blood = form.blood.value;
        const gender = form.gender.value;
        const dob = form.dob.value;
        console.log("SUBMITTED", name, email, phone, password, confirmpassword, city, batch, blood, gender, dob);

        const userData = {
            name,
            email,
            phone,
            city,
            batch,
            blood,
            gender,
            dob,
            role: 'member',
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setpassError('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
            return;
        }
        else if (password !== confirmpassword) {
            setpassError('your password did not match')
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/.test(email)) {
            setemailError('please enter valid email')
            return;
        }
        else if (!/^01[3-9]\d{8}$/.test(phone)) {
            setPhoneError('please enter valid number')
            return;
        }
        else if ((name.length && batch.length && city.length && blood.length && dob.length && gender.length) === 0) {
            setFillError('please fillup all the fields please')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                sendVerificationEmail(loggedUser);
                updateUserData(loggedUser, name);
                navigate(from, { replace: true });


                // Use the user's ID as the document ID
                const userDocRef = doc(usersCollectionRef, loggedUser.uid);

                // Set the data in the Firestore document
                // setDoc(userDocRef, {
                //     name,
                //     email,
                //     phone,
                //     city,
                //     batch,
                //     blood, 
                //     gender,
                //     dob,
                //     role: "notAdmin",
                // })
                // .then( () => {
                //     console.log("document successfully written!!");
                // })
                // .catch(error => {
                //     console.error("error writing document", error);
                // })

                const userDataWithUID = {
                    ...userData,
                    uid: loggedUser.uid,
                };

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userDataWithUID),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    });



            })
            .catch(error => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    setemailError('Email is already in use. Please use a different email.');
                } else {
                    setemailError('An error occurred while creating the account. Please try again later.');
                }
            })

        handleRegisterClick();

        // fetch('http://localhost:5000/user', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })

    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // const handleGithubSignIn = () => {
    //     signInWithGithub()
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             sendVerificationEmail(loggedUser);
    //             window.location.href = from;
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Please verify your email address');
            })
            .catch(error => {
                console.log(error);
            })
    };

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('username updated');
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div>
            <Head></Head>
            <div className="body2">
                <div className="container">
                    <div className="login-link">
                        <div className="logo">
                            <img src={logo6} alt="" />
                            {/* <span className="text">CSE-AA-LU</span> */}
                        </div>
                        <p className="side-big-heading">Already a Member ?</p>
                        <p className="primary-bg-text">To Keep Track on your dashboard please login with your personal info</p>
                        {/* <a href="/login" className="loginbtn" onClick={handleLoginClick} >Login</a> */}
                        {/* <Link to={navigate("/login")} className="loginbtn">Login</Link> */}
                        {/* <button className="loginbtn" onClick={handleLoginClick}>Login</button> */}
                        <input type="button" value="Login" className="loginbtn" onClick={handleLoginClick} />

                    </div>
                    <form onSubmit={handleFormSubmitReg} className="signup-form-container">
                        <p className="big-heading">Create Account</p>
                        <div className="social-media-platform">
                            <a href="#" onClick={handleGoogleSignIn} ><i className='bx bx-lg bxl-google'></i></a>
                            {/* <a href="#" ><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#" ><i className='bx bx-sm bxl-github'></i></a> */}
                        </div>


                        <div className="signup-form-content">

                            <div className="stage1-content">
                                {/* Form content for stage 1 */}
                                <div className="button-container">
                                    <div className="text-fields name">
                                        <label htmlFor="name"><i className='bx bx-user'></i></label>
                                        <input className='input-logreg' type="text" name="name" id="name" placeholder='Enter Your Name' />
                                    </div>
                                    <div className="text-fields batch">
                                        <label htmlFor="batch"><i className='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                        <input className='input-logreg' type="text" name="batch" id="batch" placeholder='Enter Your Batch' />
                                    </div>
                                </div>

                                <div className="button-container">
                                    <div className="text-fields dob">
                                        <input className='input-logreg' type="date" name="dob" id="dob" />
                                    </div>
                                    <div className="gender-selection">
                                        <p className="field-heading">Gender : </p>
                                        <label htmlFor="male">
                                            <input className='input-logreg' type="radio" name="gender" id="male" value="Male" />Male
                                        </label>
                                        <label htmlFor="female">
                                            <input className='input-logreg' type="radio" name="gender" id="female" value="Female" />Female
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div className="stage2-content">
                                {/* Form content for stage 2 */}
                                <div className="button-container">
                                    <div className="text-fields phone">
                                        <label htmlFor="phone"><i className='bx bx-phone'></i></label>
                                        <input className='input-logreg' type="number" name="phone" id="phone" placeholder='Enter Your Contact Number' />
                                    </div>
                                    <div className="text-fields email">
                                        <label htmlFor="email"><i className='bx bx-envelope'></i></label>
                                        <input className='input-logreg' type="email" name="email" id="email" placeholder='Enter Your Email ID ' />
                                        {/* <input type="email" name="email" id="email" placeholder='Enter Your Email ID ' /> */}
                                    </div>
                                </div>

                                <div className="button-container">
                                    <div className="text-fields password">
                                        <label htmlFor="password"><i className='bx bx-lock' ></i></label>
                                        <input className='input-logreg' type="password" name="password" id="password" placeholder='Enter Your Password' />
                                    </div>
                                    <div className="text-fields confirmpassword">
                                        <label htmlFor="confirmpassword"><i className='bx bx-lock' ></i></label>
                                        <input className='input-logreg' type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' />
                                    </div>
                                </div>

                            </div>


                            <div className="stage3-content">
                                {/* Form content for stage 3 */}
                                <div className="button-container">
                                    <div className="text-fields city">
                                        <label htmlFor="city"><i className='bx bx-buildings bx-tada bx-flip-horizontal' ></i></label>
                                        <input className='input-logreg' type="text" name="city" id="city" placeholder='Enter Your City' />
                                    </div>
                                    <div className="text-fields blood">
                                        <label htmlFor="blood"><i className='bx bxs-donate-blood bx-tada bx-flip-horizontal' ></i></label>
                                        {/* <input type="text" name="blood" id="blood" placeholder='Enter Blood Group' /> */}
                                        <select className="custom-select" defaultValue="Your Blood Group" name="blood">
                                            <option value="Your Blood Group">Your Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    Your some information will be recorded for Blood donation program.
                                </div>
                                <div className="pagination-btns">
                                    <input type="submit" value="Submit" className="nextPage stagebtn3b" />
                                    {/* <input type="submit" value="Submit" className="nextPage stagebtn3b" onClick={handleLoginClick} /> */}
                                    {/* <button type="submit" value="submit" className="nextPage">submit</button> */}
                                    {/* <button type="submit" className="nextPage stagebtn3b">Submit</button> */}
                                    {/* <button className="nextPage">submit</button> */}
                                </div>
                                <p className='text-danger'><small>{emailerror}</small></p>
                                <p className='text-danger'><small>{phoneError}</small></p>
                                <p className='text-danger'><small>{passerror}</small></p>
                                <p className='text-danger'><small>{fillError}</small></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;