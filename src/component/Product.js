import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Product =(props)=>{

    const [isAdding,setIsAdding] =useState(false);
    const { cart,setCart } = useContext(CartContext);
    const {product} = props;

    const addToCart=(event,product)=>{
        event.preventDefault();
        let _cart = {...cart};//{ items:{} }
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[product.id]){
            _cart.items[product.id]+=1;
        } else{
            _cart.items[product.id] = 1;
        }
        if(!_cart.totalItems){
            _cart.totalItems=0;
        }
        _cart.totalItems+=1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)

        // const cart ={
        //     items:{
        //         '7b623b62-6f1b-4817-bae1-97e5ec4a7a4c':3,
        //         '4704a7da-8547-41f0-a439-407fb1877189':2
        //     },
        //     totalItems:5
        // }
    }
    return (
        <>
               <Link to={`/products/${product.id}`}>
               <div className="flex flex-col justify-between items-center lg:block">
                    <img className="w-2/3 lg:w-full" src={product.img} alt="product"/>
                    <div className="text-center">
                    <h2 className="mt-4 mb-4 text-lg py-2 font-bold">{product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full px-4 text-sm">{product.size}</span>
                    </div>
                    
                    <div className="w-3/5 lg:w-full flex items-center justify-between mt-4">
                        <span className="font-bold">₹ {product.price}</span>
                         <button disabled={isAdding} onClick={(e)=>{addToCart(e,product)}} className={`${isAdding ? 'bg-green-500':'bg-yellow-500'}
                         bg-yellow-500 py-1 px-4 rounded-full font-bold`}>Add{isAdding ? 'ed' : ''}</button>
                    </div>
                </div>
               </Link>
        </>
    )
}

export default Product;