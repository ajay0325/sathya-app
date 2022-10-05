import grstyle from './grocery.module.css';
import { useEffect, useState } from 'react';
import GroceryItems from './groceryItems';
import { useParams } from 'react-router-dom';

function Grocery() {

    const [list, setList] = useState([]);
    const path = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/'+path.lists).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false;
            }
        }).then((data) => {
            data.forEach((item)=>{
                let offer = (item.offer/100)*item.price;
                item.offerPrice = item.price - offer; 
            })
            setList(data);
        })
    }, [path.lists])

    return (
        <div className={grstyle.container}>

            <div className={grstyle.container2}>
                <h1>Groceries</h1>
                <p>filter </p>
                <select>
                <option value='none'>None</option>
                    <option value='low'>Low to High</option>
                    <option value='high'>High to Low</option>
                </select>
                <div className={grstyle.wrap}>
                    {
                        list.map((data) => {
                            return (
                                <GroceryItems key={data.id} id={data.id} name={data.name} quantity={data.quantity} value={data.value} price={data.price} offerPrice={data.offerPrice} item={data} image={data.url}></GroceryItems>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Grocery;