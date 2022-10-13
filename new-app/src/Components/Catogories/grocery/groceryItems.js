// import { useState } from 'react';
import styles from './grocery.module.css';
import { useContext, useState } from 'react';
import MyContext from '../../../context';
import { useNavigate } from 'react-router-dom';


function GroceryItems(props) {
    //  const[qty, setQty] = useState(1)
    const cart = useContext(MyContext);
    const [cartBtn, setBtn] = useState(true);
    const addCart = () => {
        // cart.find()
        cart.addItems(props.item);
        cart.btnChange();
        setBtn(false);
    }
    // const offer = (props.offer/100)*props.price;
    // const offerPrice = props.price - offer;
    const navigate = useNavigate();

    return (
        <div className={styles.item} >
            <div className={styles.div} onClick={() => {
                navigate(`./${props.id}`)
            }}>
                <img src={props.image} alt='Products'></img>
                <div className={styles.offer}>
                    <p>Offer</p>
                    <p><span>{props.offer}</span>%</p>
                </div>
                
            </div>
            
            <div className={styles.details}>
                
                <h3>{props.name}</h3>
                <p><span>{props.value}</span></p>
                <p>Offer Price: Rs.<span>{Math.round(props.offerPrice)}</span></p>
                <p><s>M.R.P: Rs.<span>{props.price}</span></s></p>
                {cartBtn ? <button onClick={addCart}>Add to cart</button> : <b>Added to cart</b>}
            </div>
            <br></br>
        </div>
    )
}

export default GroceryItems;