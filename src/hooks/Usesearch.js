import { useEffect, useState } from "react"

const Usesearch = (id) => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch(`https://immense-oasis-61759.herokuapp.com/donation/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    return [items, setItem]
}
export default Usesearch;