import Product from "./Product";
import { useState,useEffect, useContext } from "react";
import { list } from "../list";
const Products =()=>{


    const [products,setProducts] = useState([]);
    useEffect(() =>{
     setProducts(list);
    },[])

    return (
        <>
        <div className="w-11/12 lg:w-10/12 mx-auto pb-24">
            <h1 className="text-2xl lg:text-lg font-bold my-4 lg:my-8">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-8 gap-24 ">
                {
                    products.map(product => {
                    return <Product key={product.id} product={product} />
                })
                }
               
                
            </div>

        </div>

        </>
    )
}

export default Products;