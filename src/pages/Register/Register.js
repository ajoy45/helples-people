import React from 'react';
import styles from'./Register.module.css';
import { Link, useNavigate,} from "react-router-dom";
import img from '../../images/logos/Group 1329.png';
import googleImg from '../../images/logos/google.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';
const Register = () => {
    let navigate = useNavigate();
    const auth=getAuth(app)
    const googleProvider=new GoogleAuthProvider()
    const handelGoogleSin=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            
        }).catch(error=>{
            console.log(error)
        })
        navigate('/volunter')
    }
    
    return (
        <div className={styles.register_container}>
            <div className='text-center p-4'>
                <img width={202.81} src={img} alt=''></img>
            </div>
            <div className={styles.google_container}>
                <button onClick={handelGoogleSin} className='mb-2 w-75 '><img className='me-4' width={31} height={31.74} src={googleImg} alt='imag'></img>Continue With Google</button>
                <p>Don't have an account?<Link to='/account' className='text-decoration-none'>Create an account</Link></p>
            </div>


        </div>
    );
};

export default Register;