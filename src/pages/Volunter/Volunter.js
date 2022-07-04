import React from 'react';
import styles from './Volunter.module.css'
import image from '../../images/logos/Group 1329.png';
const Volunter = () => {
    return (
        <div className={styles.volunter_container}>
            <div className='text-center p-3'>
                <img width={202.81} src={image} alt="" />
            </div>
            <div className={styles.volunter_form_container}>
                <h1>Register as a Volunteer</h1>
                <form >
                    <input className='w-100 mb-4' type="text" name="" placeholder='Full Name' /><br></br>
                    <input className='w-100 mb-4' type="text" name="" placeholder='UserName Or Email' /><br></br>
                    <textarea className='w-100 mb-4' name="" id="" placeholder='Description'></textarea>
                    <input className='w-100 bg-primary border-0 p-2' type="submit" value="Registration" />
                </form>
            </div>


        </div>
    );
};

export default Volunter;