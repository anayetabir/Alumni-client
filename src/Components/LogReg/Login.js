import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LogReg.css';
import Head from '../Head/Head';
import { AuthContext } from '../../Context/UserContext';
import logo6 from '../img/logo6.svg';


const Login = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration");
    };

    // const handleLoginClick = () => {
    //     navigate("/");
    // };

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const { signIn, signInWithGoogle, signInWithGithub, resetEmail } = useContext(AuthContext);


    const [error, setError] = useState('');

    const handleFormSubmitLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("SUBMITTED", email, password);

        // handleLoginClick();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    alert('Please verify your email address');
                }
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.code);
            })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser.email);
                // window.location.href = from;
                navigate(from, { replace: true });
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
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }



    const emailRef = useRef();

    const handleResetPass = (event) => {

        const email = emailRef.current.value;
        // console.log(email);
        if (!email) {
            alert('Please provide your email address to reset your password');
            return;
        }

        resetEmail(email)
            .then(() => {
                alert('Please check your email');
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>
            <Head></Head>
            <div className="body2 pt-5 mt-5">
                <div className="container r">
                    <div className="login-link">
                        <div className="logo">
                            <img src={logo6} alt="" />
                            {/* <span className="text">CSE-AA-LU</span> */}
                        </div>
                        <p className="side-big-heading">Create New Account</p>
                        <p className="primary-bg-text">To Keep Track on your dashboard please login with your personal info</p>
                        {/* <a href="/registration" className="loginbtn" onClick={handleLoginClick} >Register Now</a> */}
                        {/* <Link to={navigate("/login")} className="loginbtn">Login</Link> */}
                        {/* <button className="loginbtn" onClick={handleRegisterClick}>register</button> */}
                        <input type="button" value="Register Now" className="loginbtn" onClick={handleRegisterClick} />
                    </div>



                    <form onSubmit={handleFormSubmitLogin} className="signup-form-container">
                        <p className="big-heading">Login To Your Account</p>
                        <div className="social-media-platform">
                            {/* <a href="#" onClick={handleGoogleSignIn} ><i className='bx bx-lg bxl-google'></i></a> */}
                            {/* <a href="#"><i className='bx bx-sm bxl-twitter'></i></a>
                            <a href="#" onClick={handleGithubSignIn}><i className='bx bx-sm bxl-github'></i></a> */}
                        </div>
                        <div className="login-form-contents">
                            {/* <div className="text-fields email">
                                <label htmlFor="email"><i className='bx bx-envelope'></i></label>
                                <input className='input-logreg' type="email" name="email" id="email" ref={emailRef} placeholder='Enter Your Email ID ' />
                            </div>
                            <div className="text-fields password">
                                <label htmlFor="password"><i className='bx bx-lock' ></i></label>
                                <input className='input-logreg' type="password" name="password" id="password" placeholder='Enter Your Password' />
                            </div> */}
                            <div class="form-floating mb-3 w-100">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' ref={emailRef} />
                                <label for="floatingInput"><i className='bx bx-envelope'></i>Email address</label>
                            </div>
                            <div class="form-floating w-100">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' />
                                <label for="floatingPassword"><i className='bx bx-lock' ></i>Password</label>
                            </div>
                            <p><small> <b>Forget Password? Please..</b> <br /><button className='btn btn-link' onClick={handleResetPass}>Reset Password</button></small></p>
                            <input type="submit" value="login" className="nextPage" />


                        </div>
                        <p className='text-danger'><small>{error}</small></p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;