import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }

    const handleCraeteUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        console.log('signup successful', email, password);
    }


    return (
        <div className='container'>
            <h1>Please Create An Account</h1>
            <div className='login-card'>
                <form onSubmit={handleCraeteUser}>
                    <div>
                        <label htmlFor="Email">Email: </label><br />
                        <input onBlur={handleEmailBlur} type="email" name=" email" id="" required />
                    </div>
                    <div>
                        <label htmlFor="Password">Password: </label><br />
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <div>
                        <label htmlFor="Password">Confirm Password: </label><br />
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" required />
                    </div> <h3 style={{ color: 'red' }}>{error}</h3>
                    <div>
                        <input className='login-button' type="submit" value="Sign Up" />
                    </div>
                </form><br />
                <p> Already Have An Account? <Link to="/login" className="form-link">Please Login</Link> </p>or
                <div className='divider'>
                </div>

                <button type="submit" className='google-icon'>
                    <div className='button-div'>
                        <div>
                            <img className='img' src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="" />
                            <div className='text'>
                                Continue With Google
                            </div>
                        </div>


                    </div>
                </button>
            </div>
        </div>
    );
};

export default Signup;