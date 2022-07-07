import React, { useEffect, useState } from 'react';
import './Admin.css'
import Admindetails from './Admindetails';

const Admin = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handelDelete=id=>{
        const url=`http://localhost:5000/user/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remaining=users.filter(user=>user._id!==id)
                setUsers(remaining)
            }
        })
    }
    return (
        <>
             <table className="table w-50 mx-auto" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">DESCRIPTION</th>
                        </tr>
                    </thead>
            </table>
            {
                users.map(user => <Admindetails
                  key={user._id}
                  user={user}
                  handelDelete={handelDelete}
                ></Admindetails>)
            }
            
        </>
    );
};

export default Admin;