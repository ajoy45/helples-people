import { useEffect, useState } from "react"

const Usesearch=(id)=>{
    const [items,setItem]=useState([])
    useEffect(()=>{
         fetch(`http://localhost:5000/donation/${id}`)
         .then(res=>res.json())
         .then(data=>setItem(data))
    },[id])
    return[items,setItem]
}
export default Usesearch;