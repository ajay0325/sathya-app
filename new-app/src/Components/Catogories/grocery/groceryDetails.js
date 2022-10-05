import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function GroceryDetails() {

    const [data, setData] = useState({})
    const path = useParams();

    
    useEffect(() => {
        fetch(`http://localhost:3000/${path.detail}/${path.id}`).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false
            }
        }).then((input) => {
            setData(input)
        })
    },[path.detail, path.id])


    return (
        <div>
            <div>
                <img src={data.url}></img>
            </div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default GroceryDetails;