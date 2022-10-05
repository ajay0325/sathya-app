import styles from './header.module.css';
import MyContext from '../../context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMember } from '../../redux/slice/userslice';
import { logout } from '../../redux/slice/userslice';

function Header(){
    const navigate = useNavigate();
    
    let cartItems = useContext(MyContext);
    const user = useSelector(selectMember);
    const dispatch = useDispatch();
    const [cartNo, setCartNo] = useState(0);
    
    useEffect(()=>{
        setCartNo(cartItems.cart.length)
    },[cartItems.cart])

    useEffect(() => {
        return () => console.log(user.isLogin);
    },[]);
    const updateLogout = ()=>{
        dispatch(logout());
    }

    return(
        <header className={styles.container}>
            <div className={styles.header}>
            {/* <img></img> */}
            <p onClick={()=>{
                navigate('/')
            }}>Grocify.</p>
            <input type='text' className={styles.input} placeholder="Search here ..."></input>
            {user.isLogin ? <p onClick={updateLogout}>Logout</p> : <p onClick={()=>{navigate('login')}}>Login</p>}
            
            {/* <p>Sign up</p> */}
            <p onClick={()=>{
                if(user.isLogin == false){
                    alert("Please Login to see the cart items")
                }else{
                    navigate('/cart')
                }
                
            }}>Cart(<span>{cartNo}</span>)</p>
            </div>
        </header>
    )
}

export default Header;
