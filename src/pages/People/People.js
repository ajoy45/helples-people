import React from 'react';
import './People.css';
import { useNavigate } from "react-router-dom";
const People = ({ people }) => {
    const navigate = useNavigate();
    const handelClick=()=>{
        navigate('/volunter')
    }
    const { img, descripton } = people;
    return (
        <div className='single-people' onClick={handelClick}>
            <img width={300} src={img} alt="" />
            <div className='bg-primary w-50 description-style'>
                <p className='text-center text-white'>{descripton}</p>
            </div>
           
        </div>
    );
};

export default People;