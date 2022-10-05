import styles from './td.module.css'
import { useContext, useState } from 'react';
import MyContext from '../../context';
import { useNavigate } from 'react-router-dom';


function TopItems(props){
    const cart = useContext(MyContext);
    const [cartBtn, setBtn] = useState(true);
    const addCart = ()=>{
        cart.addItems(props.item);
        setBtn(false);
    }
    const offer = (props.offer/100)*props.price;
    const offerPrice = props.price - offer;
    const navigate = useNavigate();
    
    

    return( 
        <div className={styles.item} >
            <div className={styles.div} onClick={()=>{
            navigate(`/${props.link}/${props.id}`)
        }}>
            <img src={props.image} alt='Products'></img>
            </div>
            <div className={styles.details}>
            <p>Offer : <span>{props.offer}</span>%</p>
            <h3>{props.name}</h3>
            <p><span>{props.value}</span></p>
            <p>Offer Price: Rs.<span>{offerPrice}</span></p>
            <p><s>M.R.P: Rs.<span>{props.price}</span></s></p>
            {cartBtn ? <button onClick={addCart}>Add to cart</button> : <b>Added to cart</b>}
            </div>
            <br></br>
            {/* <p>{qty}</p>
            <button onClick={()=>{
                if(qty>1){
                    setQty(qty-1)
                }
            }}>-</button>
            <button onClick={()=>{
                setQty(qty+1)
            }}>+</button> */}
        </div>
    )
}

export default TopItems;