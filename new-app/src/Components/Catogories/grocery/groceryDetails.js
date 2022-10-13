import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './grocery.module.css';


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
        <div className={styles.container}>
            <div className={styles.container3}>
            <div className={styles.image}>
                <img src={data.url} alt="items"></img>
            </div>
            <div className={styles.details}> 
            <h1>{data.name}</h1>
            <p><s>M.R.P: Rs.<span>{data.price}</span></s></p>
            </div>
            
            </div>
            
        </div>
    )
}

export default GroceryDetails;