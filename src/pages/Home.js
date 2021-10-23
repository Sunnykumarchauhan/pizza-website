import { Link } from "react-router-dom";

import Products from "../component/Products";

const Home =()=>{
    return (
        <>
            <div className="bg-gray-200 lg:bg-white hero py-16">
                <div className=" w-11/12 lg:w-10/12 mx-auto flex flex-col-reverse items-center justify-between lg:flex-row">
                    <div className="w-11/12 mt-16 lg:mt-0 lg:w-1/2">
                        <h6 className="text-lg "><em>Are you hungry?</em></h6>
                        <h1 className="text-5xl lg:text-6xl font-bold text-yellow-800">Don't wait!</h1>
                        <Link to='/products'><button className="px-6 py-2 text-white rounded-full mt-4 font-bold bg-yellow-500 hover:bg-yellow-600">Order Now</button></Link>
                    </div>
                    <div className="w-11/12 lg:w-1/2">
                        <img className="w-full lg:w-4/5" src="images/pizza.png" alt="pizza"/>
                    </div>
                </div>
            </div>

            <div className="pb-12 lg:pb-24">
                <Products/>

            </div>

           

        </>

    )
}

export default Home;