import React from 'react';
import styles from './Createaccount.module.css'
import image from '../../images/logos/Group 1329.png';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function Volunter() {
    const auth = getAuth(app);
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const singup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);

    };
    if(user){
        navigate('/volunter')
    }


    return (
        <div className={styles.account_container}>
            <div className='text-center p-3'>
                <img width={202.81} src={image} alt="" />
            </div>
            <div className={styles.account_form_container}>
                <h1>Register</h1>
                <form onSubmit={singup}>
                    <input className='w-100 mb-4' type="text" name="name" placeholder='Full Name' /><br></br>
                    <input className='w-100 mb-4' type="text" name="email" placeholder=' Email' /><br></br>
                    <input className='w-100 mb-4' type="password" name="password" placeholder='Password' />
                    <input className='w-100 bg-primary border-0 p-2' type="submit" value="Singup" />
                </form>
            </div>


        </div>
    );
}

export default Volunter;