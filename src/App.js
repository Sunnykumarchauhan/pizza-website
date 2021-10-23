import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Navigation from './component/Navigation'
import Productspage from './pages/ProductsPage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'
import About from './pages/About'
import Footer from './component/Footer'

const App=() =>{
const [cart,setCart]=useState({});
//fetch from local storage
useEffect(()=>{
  const cart = window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));

},[])

useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
},[cart])
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart,setCart }}> 

        <Navigation/>   
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" exact component={Productspage}></Route>
          <Route path="/products/:_id" component={SingleProduct}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/cart"  component={Cart}></Route>
        </Switch>
        <Footer/>
        </CartContext.Provider> 
      </Router>
    </>
  );
}

export default App;
