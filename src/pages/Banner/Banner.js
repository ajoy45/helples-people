import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container home-container'>
            <h1>I grow by helping people in need</h1>
            <input className="form-control w-25 mx-auto d-inline " list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            <button className='d-inline search-btn'>search</button>
        </div>
    );
};

export default Banner;