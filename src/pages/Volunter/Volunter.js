import React, { useRef, useState } from 'react';
import styles from './Volunter.module.css'
import image from '../../images/logos/Group 1329.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Volunter = () => {
    
    const navigate=useNavigate();
    const refName=useRef();
    const refEmail=useRef();
    const refDescription=useRef();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[description,setDescription]=useState('');
    const handelName=()=>{
        setName(refName.current.value)
    }
    const handelEmail=()=>{
        setEmail(refEmail.current.value)
    }
    const handelDescription=()=>{
        setDescription(refDescription.current.value)
    }
    const handelVolunterSubmit=event=>{
        event.preventDefault()
        const data={
            "name" : name,
            "email":email,
            "description":description
        }
        const url='http://localhost:5000/user';
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        
           navigate('/donation')
    
        
    }
    const notify = () => toast("Wow,Now you are volunteer");
    
    return (
        <div className={styles.volunter_container}>
            <div className='text-center p-3'>
                <img width={202.81} src={image} alt="" />
            </div>
            <div className={styles.volunter_form_container}>
                <h1>Register as a Volunteer</h1>
                <form onSubmit={handelVolunterSubmit}>
                    <input ref={refName} onBlur={handelName} className='w-100 mb-4' type="text" name="" placeholder='Full Name' /><br></br>
                    <input ref={refEmail}  onBlur={handelEmail} className='w-100 mb-4' type="text" name="" placeholder='UserName Or Email' /><br></br>
                    <textarea ref={refDescription} onBlur={handelDescription} className='w-100 mb-4' name="" id="" placeholder='Description'></textarea>
                    <input className='w-100 bg-primary border-0 p-2' type="submit" value="Registration" onClick={notify} />
                </form>
            </div>


        </div>
    );
};

export default Volunter;