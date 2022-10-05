import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './login.module.css';
// import { selectMember } from '../../redux/slice/userslice';
import { login } from '../../redux/slice/userslice';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setValid] = useState(false);
    const dispatch = useDispatch();
    // const user = useSelector(selectMember);

    // const [user, getUser] = useState([]);

    const handlelogin = () => {
        
        navigate('/')
        dispatch(
            login({
                isLogin:true
            }))
        
    }

    useEffect(() => {

        if ((email.includes('@') && password.length > 4)) {
            setValid(true);
        } else {
            setValid(false)
        }

    }, [email, password]);

    const emailHandler = (int) => {
        setEmail(int.target.value)
    }
    const passwordHandler = (int) => {
        setPassword(int.target.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.bgImage}></div>

            <form onSubmit={handlelogin} className={styles.login}>
                <h2>LOGIN</h2>
                <br></br>
                <br></br>
                <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} /><br></br>
                <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br>
                {isValid ? <button type="submit" className={styles.submit1} >Submit</button> : <button type="submit" className={styles.submit2} disabled>Submit</button>}
                <br></br>
                <p className={styles.text}>Don't have an account? <span><Link to='/signup'>Sign up</Link></span></p>
            </form>

        </div>
    );
}

export default Login;

