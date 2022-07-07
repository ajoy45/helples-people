import { useEffect, useState } from "react";

const Useresource=()=>{
    const[peoples,setPeoples]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/donation')
        .then(res=>res.json())
        .then(data=>setPeoples(data))
    },[])
    return[peoples,setPeoples]
}
export default Useresource;