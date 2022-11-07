import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]= useState('')
    const 
    [
    signInWithEmailAndPassword,
    user,
    loading
    ]=useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location?.state?.from?.pathname || "/";


    const handleSignInEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleSignInPassword = (event) => {
        setPassword(event.target.value);
    }
     useEffect( ()=>{
        if (user) {
            navigate(from,{replace:true});
        }
     },[navigate,from,user])
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('there is a problem with incorect email and password');
        signInWithEmailAndPassword(email,password);
    
    }
    return (
        <div className='container'>
            <h1> Login Page</h1>

            <div className='login-card'>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="Email">Email: </label><br />
                    <input onBlur={handleSignInEmail} type="email" name=" email" id="" required />
                    </div>
                    <div>
                    <label htmlFor="Password">Password: </label><br />
                    <input onBlur={handleSignInPassword} type="password" name="" id="" required />
                    </div>

                    <p style={{color:'red'}}>{error} </p>
                   {
                    loading && <p>Loading...</p>
                   }
                   <br/>
                    <input className='login-button' type="submit" value="Login" />
                </form><br />
                <p> New to Ema-john? <Link to="/signup" className="form-link">Create New Account</Link> </p>or
                <div className='divider'>
                </div> <br />
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

export default Login;