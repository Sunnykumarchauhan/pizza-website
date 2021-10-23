import { useContext } from 'react'
import {Link} from 'react-router-dom'
import About from '../pages/About'
import { CartContext } from '../CartContext'
const Navigation =()=>{
    // const cartStyle={
    //     background:'#F59E0D',
    //     padding:'6px 12px',
    //     borderRadius:'50px'
        
    // }
   const {cart} = useContext(CartContext);
    return (
    <>
        <nav className="w-11/12 lg:w-10/12 mx-auto flex justify-between items-center py-4">
         
                <Link to="/">
                    <img style={{height:45}} src="/images/logo.png" alt="logo" />
                </Link>

                <ul className="flex items-center">
                    <li className="hover:text-red-700 hidden lg:block"><Link to="/">Home</Link></li>
                    <li className="ml-6 hover:text-red-700 hidden lg:block"><Link to="/products">Product</Link></li>
                    <li className="ml-6 hover:text-red-700 hidden lg:block"><Link to="/about">About</Link></li>
                    <li className="ml-6">
                        <Link to="/cart">
                            <div className="bg-yellow-500 rounded-full py-1 px-3 flex items-center hover:bg-yellow-600">
                                <span className="text-white font-bold">{cart.totalItems ? cart.totalItems :0}</span>
                                <img className="ml-4" src="/images/cart.png" alt="cart"/>
                            </div>
                        </Link>
                    </li>
                </ul>
          
        </nav>
    </>
    )
}

export default Navigation;