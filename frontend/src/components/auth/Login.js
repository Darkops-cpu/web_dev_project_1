import React from 'react'
import "./Login.css";
import campusquerylogo from '../auth/campusquerylogo.jpeg';
import {signInWithPopup} from 'firebase/auth';
import { auth, provider } from '../../firebase';

//Login Page with firebase authentication

function Login() {

    const handleSubmit = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='login-container'>
        <div className='login-content'>
            <img src= {campusquerylogo} alt='logo' />
            <button onClick = {handleSubmit} className='btn-login'>Login to Continue</button>
        </div>
    </div>
  )
}

export default Login