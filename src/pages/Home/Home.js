import React, { useRef, useState } from 'react';
import Useresource from '../../hooks/Useresource';
import People from '../People/People';
import './Home.css';

const Home = () => {

    const [peoples, setPeoples] = Useresource()
    // const[peoples,setPeoples]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/donation')
    //     .then(res=>res.json())
    //     .then(data=>setPeoples(data))
    // },[])
    // the value of the search field 
    const [name, setName] = useState('');
    // the search result
    const [foundUsers, setFoundUsers] = useState(peoples);
    const refSearch = useRef();

    const handelSearch = event => {

        const keyword = refSearch.current.value;
        if (keyword !== '') {
            const results = peoples.filter((user) => {
                return user.descripton.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(peoples);
            // If the text field is empty, show all users
        }

        setName(keyword);

    }



    return (
        < >
            {/* <Banner></Banner> */}
            <div className='banner-container home-container'>
                <h1>I grow by helping people in need</h1>
                <div>
                    <input onChange={handelSearch}     className="form-control w-25 mx-auto d-inline" ref={refSearch} list="datalistOptions" placeholder="Type to search..."></input>
                    <button className='d-inline search-btn'>search</button>
                </div>

            </div>

            {foundUsers&&foundUsers.length>0?
                <div className='people-container'>
                    {
                        foundUsers.map(people => <People
                            key={people._id}
                            people={people}
                        ></People>)
                    }
                </div>:<h1 className='text-center mt-4 '>First you search for helping people</h1>
            }

            {/* <div className='people-container '>
                {
                    foundUsers.map(people => <People
                        key={people._id}
                        people={people}
                    ></People>)
                }
            </div> */}
        </>

    );
};

export default Home;