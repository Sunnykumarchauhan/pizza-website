import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { list } from "../list";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const SingleProduct =()=>{
    const[product,setProduct]=useState({});
    const params = useParams();
    const history= useHistory();


    const [isAdding,setIsAdding] =useState(false);
    const { cart,setCart } = useContext(CartContext);
    // const {products} = props;


    useEffect(()=>{
        const found=list.find(item=>item.id===params._id);
        setProduct(found)
    },[params._id])

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
    
    
    }

    
    
    return(
        <>
          <div className="w-10/12 mx-auto mt-12 mb-40 lg:mb-10">
              <button className="mb-12 font-bold" onClick={()=>{history.goBack()
              }}>Back</button>
              <div className="flex items-center">
                  <img className="w-1/3 lg:w-1/6" src={product.img} alt="pizza"/>
                  <div className="ml-16">
                      <h1 className="text-xl font-bold">{product.name}</h1>
                      <div className="font-bold text-gray-700 text-md">{product.size}</div>
                      <div className="font-bold mt-2">₹ {product.price}</div>
                      <button className={`${isAdding ? 'bg-green-500':'bg-yellow-500'}
                         bg-yellow-500 py-2 mt-6 px-4 rounded-full font-bold`} onClick={(e)=>{addToCart(e,product)}} >{isAdding ? 'Added' : 'Add to cart'}</button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default SingleProduct;