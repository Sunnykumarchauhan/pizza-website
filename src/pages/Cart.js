import{Link} from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../CartContext";
import { list } from '../list';
const Cart =()=>{
    let total=0;
    const [products , setProducts] = useState([]);
    const {cart,setCart}=useContext(CartContext);
    
    useEffect(()=>{
        if(!cart.items){
            return;
        } 
    var cartList=Object.keys(cart.items);
    let result = list.filter(function(item){
        return cartList.indexOf(item.id) !== -1;
        
     })
    
    setProducts(result);
        
    },[cart])
    
    const getQty=(productId)=>{
        return cart.items[productId]
    }
    const increament=(productId)=>{
        const oldQty=cart.items[productId]
        const _cart={...cart};
        _cart.items[productId]=oldQty+1;
        _cart.totalItems+=1;
        setCart(_cart);
    }
    const decreament=(productId)=>{
        const oldQty=cart.items[productId]
        if(oldQty===1){
            return
        }
        const _cart={...cart};
        _cart.items[productId]=oldQty-1;
        _cart.totalItems-=1;
        setCart(_cart);
    }

const getSum=(productId,price)=>{
    const sum = price*getQty(productId);
    total+=sum;
    return sum;
}

const handleDelete=(productId)=>{
    const _cart ={...cart};
    const qty=_cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems-=qty;
    setCart(_cart)
    setProducts(products.filter((product)=>product.id !==productId))
}
 const handleOrdernow=()=>{
    window.alert('Order placed succesfully!');
    setProducts([]);
    setCart([]);
 }
    return (
        products.length ?
        <>
        <div className="w-10/12 mx-auto lg:w-1/2 pb-24">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {
                    products.map(product=>{
                       
                        return (
                           
                        <li className="mb-12" key={product.id}>
                            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.img} alt="pizza"/>
                                    <span className="font-bold ml-4 w-48">{product.name}</span>
                                </div>
                                <div className="mt-4 lg:mt-0">
                                    <button onClick={()=>{decreament(product.id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                                    <b className="px-4">{getQty(product.id)}</b>
                                    <button onClick={()=>{increament(product.id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                                </div>

                                <span className="font-bold mt-6 mb-6 lg:mt-0 lg:mb-0">₹ { getSum(product.id,product.price)}</span>
                                <button onClick={()=>{ handleDelete(product.id)}} className="w-1/2 lg:w-1/5 bg-red-500 px-4 py-2 rounded-full leading-none text-white hover:bg-red-600">Delete</button>
                            </div>
                    
                        </li>
                        )
                    })
                }
              
                
            </ul>
            <hr className="my-6"/>

            <div className="text-right">
                <b>Grand Total: ₹ {total}</b>
            </div>
            <div className="text-right mt-6">
                <button onClick={handleOrdernow} className="font-bold bg-yellow-500 py-2 px-4 rounded-full leading-none hover:bg-yellow-600">Order now</button>
            </div>
        </div>
        </>
        :<div className="mb-40 lg:mb-32 flex flex-col items-center justify-between"> 
            <h1 className="font-bold text-3xl text-red-600 text-center">Cart empty !</h1>
            <img className="mx-auto w-1/2 lg:w-1/3 mt-12" src="/images/empty-cart.png" alt="empty cart"/>
            <Link to="/products"><button className=" mt-16 text-center font-bold bg-yellow-500 py-2 px-4 rounded-full w-28 leading-none hover:bg-yellow-600">Go Back</button></Link>
            </div>
    )
}

export default Cart;