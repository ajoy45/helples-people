import React, { useEffect, useState } from 'react';
import './Donation.css'
const Donation = () => {
    const [donates, setDonate] = useState([])
    useEffect(() => {
        fetch('https://immense-oasis-61759.herokuapp.com/donate')
            .then(res => res.json())
            .then(data => setDonate(data))
    }, [donates])
    return (
        <div className='donation-container'>
            {
                donates.map(donate => <div className='d-flex' key={donate._id}>
                    <>
                        <img width={300} src={donate.img} alt="" />
                        <h1>{donate.donationName}</h1>

                    </>
                    <button>cancle</button>
                </div>)
            }

        </div>
    );
};

export default Donation;