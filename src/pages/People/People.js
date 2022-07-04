import React from 'react';
import'./People.css'
const People = ({people}) => {
    const{img,descripton}=people;
    return (
        <div className='single-people'>
            <img width={300} src={img} alt="" />
            <div className='bg-primary w-50 description-style'>
            <p className='text-center text-white'>{descripton}</p>
            </div>
            
        </div>
    );
};

export default People;