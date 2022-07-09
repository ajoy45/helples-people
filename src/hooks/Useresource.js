import { useEffect, useState } from "react";

const Useresource = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        fetch('https://immense-oasis-61759.herokuapp.com/donation')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])
    return [peoples, setPeoples]
}
export default Useresource;