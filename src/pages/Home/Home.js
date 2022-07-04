import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import People from '../People/People';
import './Home.css';
const Home = () => {
    const[peoples,setPeoples]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/donation')
        .then(res=>res.json())
        .then(data=>setPeoples(data))
    },[])
    return (
        < >
           <Banner></Banner>
           <div className='people-container '>
           {
            peoples.map(people=><People
            key={people._id}
            people={people}
            ></People>)
           }
           </div>
           
        </>
        
    );
};

export default Home;