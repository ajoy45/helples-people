import React from 'react';
import styles from './Createaccount.module.css'
import image from '../../images/logos/Group 1329.png';
const Volunter = () => {
    return (
        <div className={styles.account_container}>
            <div className='text-center p-3'>
                <img width={202.81} src={image} alt="" />
            </div>
            <div className={styles.account_form_container}>
                <h1>Register as a Volunteer</h1>
                <form >
                    <input className='w-100 mb-4' type="text" name="" placeholder='Full Name' /><br></br>
                    <input className='w-100 mb-4' type="text" name="" placeholder=' Email' /><br></br>
                    <input className='w-100 mb-4' type="password" name="" placeholder='Password' />
                    <input className='w-100 bg-primary border-0 p-2' type="submit" value="Singup" />
                </form>
            </div>


        </div>
    );
};

export default Volunter;