import React from 'react';
import './Admindetails.css'
const Admindetails = ({user,handelDelete}) => {
    const{_id,name,email,description}=user;
    return (
        <div>
            <div className='w-50 mx-auto mt-4'>
                <table className="table">
                    
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className='ps-5 text-justify'>{name}</td>
                            <td className='ps-5 text-justify'>{email}</td>
                            <td className='ps-5 text-justify'>{description}</td>
                            <button onClick={()=>handelDelete(_id)} className='bg-primary text-white rounded-pill border-0'>Delete</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admindetails;