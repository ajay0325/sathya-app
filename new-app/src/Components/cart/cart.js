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
    details.cart.forEach((data) => {
        x = x + parseInt(data.price);
        let offer = (data.offer / 100) * data.price;
        let op = data.price - offer;
        y = y + op;
        y = Math.round(y);
        x = Math.round(x);

    });
    console.log(x);
    const [total, setTotal] = useState(x)
    const [offer, setOffer] = useState(y);

    const addTotal = (item1, item2) => {
        setOffer((prev) => {
            return prev + item1;
        })
        setTotal((prev) => {
            return prev + item2;
        })
    }

    const minusTotal = (item1, item2) => {
        setOffer((prev) => {
            return prev - item1;
        })
        setTotal((prev) => {
            return prev - item2;
        })
    }

    return (
        <div className={cart.container}>
            <div className={cart.content}>
            <h1>My Cart</h1>
                <span>(Items {details.cart.length})</span>
                <div className={cart.section}>
                
                <div className={cart.block}>
                    {
                        details.cart.map((data) => {
                            return (
                                <CartItems key={data.name} add={addTotal} minus={minusTotal} name={data.name} url={data.url} quantity={data.quantity} value={data.value} price={data.price} offer={data.offer} ></CartItems>
                            )
                        })}
                </div>
                <div className={cart.placeOrder}>
                    <h1>Payment Details</h1>
                    <div className={cart.payment}>
                    <p>Offer price<span> = Rs.{offer}</span></p>
                    <hr></hr>
                    <s>Total Price <span>= Rs.{total}</span></s>
                    <hr></hr>
                    <p>Saved amount <span>= Rs.{total - offer}</span></p>
                    </div>
                    <button>Place Order</button>
                </div>
                </div>

                
            </div>

        </div>

    )
}

export default Cart;