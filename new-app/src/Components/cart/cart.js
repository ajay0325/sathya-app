import { useContext, useState } from "react";
import CartItems from "./cartItems";
import MyContext from "../../context";
import cart from './cart.module.css';

function Cart() {

    // const [cartItems, setCartItems] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3000/cart').then((response)=>{
    //         if(response.ok){
    //             return response.json();
    //         }else{
    //             return true;
    //         }
    //     }).then((data)=>{
    //         setCartItems(data);
    //     })
    // })

    
    let x = 0;
    let y = 0;

    const details = useContext(MyContext);
    details.cart.forEach((data)=> {
       x = x + parseInt(data.price);
       let offer = (data.offer/100)*data.price;
       let op = data.price - offer;
       y = y + op;
       y=Math.round(y);
       x=Math.round(x);
       
    });

    const [total, setTotal] = useState(y);

    const addTotal = (item)=>{
        setTotal((prev)=>{
            return prev+item;
        })
    }

    const minusTotal = (item)=>{
        setTotal((prev)=>{
            return prev-item;
        })
    }

    return (
        <div className={cart.container}>
            <div className={cart.content}>
            <h1>My Cart</h1>
            <span>(Items {details.cart.length})</span>
            <div className={cart.block}>
                {
                    details.cart.map((data) => {
                        return (
                            <CartItems key={data.name} add={addTotal} minus={minusTotal} name={data.name} url={data.url} quantity={data.quantity} value={data.value} price={data.price} offer={data.offer} ></CartItems>
                        )
                    })}
            </div>
            <p>Total price = Rs.{total}</p>
        {/* <p>Saved amount = {x-y}</p> */}
        </div>
        
        </div>
        
    )
}

export default Cart;