import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css'
const Event = () => {
    const navigate=useNavigate()
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[img,setImg]=useState('');
    const refEmail=useRef('');
    const refDescription=useRef('');
    const refImg=useRef('');

    const handelTitle=()=>{
        setTitle(refEmail.current.value)
    }
    const handelDescription=()=>{
        setDescription(refDescription.current.value)
    }
    const handelImg=()=>{
        setImg(refImg.current.value)
    }
    const handelSubmit=(event)=>{
            event.preventDefault();
            const data={
                "title":title,
                "img":img,
                "descripton":description
            }
            const url='http://localhost:5000/donation';
            fetch(url,{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            navigate('/')
    }
    return (
        <div className='event-container' >
            <h1 className='text-center'>this is eveny page</h1>
            <div className='w-50 mx-auto'>
                <form onSubmit={handelSubmit} >
                    <label htmlFor="html">Event Title</label><br />
                    <input ref={refEmail} onBlur={handelTitle} className='w-100 mb-3' type="text" placeholder='Type title' />
                    <label htmlFor="html">Description</label><br />
                    <textarea ref={refDescription} onBlur={handelDescription} name="" className='w-100 mb-3' placeholder='Description'></textarea>
                    <label htmlFor="html">Image url</label><br />
                    <input ref={refImg} onBlur={handelImg} type="text" name="" placeholder='Img Url' className='w-100 mb-3' />
                    <input className='bg-primary border-0 text-white ' type="submit" value="Add event" />
                </form>
            </div>

        </div>
    );
};

export default Event;