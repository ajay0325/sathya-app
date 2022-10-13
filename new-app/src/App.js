import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import { Route, Routes } from "react-router-dom";
import Grocery from "./Components/Catogories/grocery/grocery";
import Cart from "./Components/cart/cart";
import MyContext from "./context";
import { useState } from "react";
import GroceryDetails from "./Components/Catogories/grocery/groceryDetails";
import Login from "./Components/login/login";

function App() {

  const [cart, setCart] = useState([]);
  const [cartBtn, setBtn] = useState(true);

  const btnChange = () => {
    setBtn(false)
  }

  const addItems = (items) => {

    //     fetch('http://localhost:3000/cart', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json,text/plain,*/*',
    //         'Content-Type': 'application/json',
    //         'Accept-Charset': 'utf-8'
    //     },
    //     body: JSON.stringify(items)
    // })

    let x = cart.findIndex((item) => {
      return item.name === items.name
    })

    if (x < 0) {
      setCart((prev) => {
        return [items, ...prev]
      })
    }else{
      alert("already in cart")
    }



  }

  const remove = (name) => {
    let item = cart.filter((x) => {
      return x.name !== name
    })
    setCart(item)
  }


  // const [items, setItems] = useState([]);

  //   fetch('http://localhost:3000/cart').then((response)=>{
  //     if(response.ok){
  //       return response.json()
  //     }else{
  //       return false;
  //     }
  //   }).then((data)=>{
  //     setItems(data);
  //   })




  return (

    <div>
      <MyContext.Provider value={{ cart, addItems, remove, btnChange, cartBtn }}>
        <Header></Header>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/:lists" element={<Grocery></Grocery>}></Route>
          <Route path="/:detail/:id" element={<GroceryDetails />}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </MyContext.Provider>
    </div>

  )
}
export default App;
