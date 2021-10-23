import {Link} from 'react-router-dom'
const Footer=()=>{
    
     return (
     
         <>
        <div className="bg-gray-200 w-full py-6">
            <div className="w-10/12 mx-auto flex flex-col jusitify-center items-center">
                <div> 
                    <img src="/images/logo.png" alt="logo" />
                </div>

                <ul className="flex jusify-between mt-6">
                <Link to="/about"><li className="font-bold text-gray-700 ">About</li></Link>
                <li className="font-bold text-gray-700 ml-5 lg:ml-8">Contact</li>
                <li className="font-bold text-gray-700 ml-5 lg:ml-8">FAQ</li>
                <Link to="/products"><li className="font-bold text-gray-700 ml-5 lg:ml-8">Products</li></Link>
                <li className="font-bold text-gray-700 ml-5 lg:ml-8">Legal</li>
                </ul>

                <h1 className="mt-8 text-xl font-bold">Stay in touch</h1>

                <ul className="flex items-center justify-around mt-6 mb-8 rounded-md">
                    <li className="bg-red-400 hover:bg-red-500 flex items-center justify-center  p-2 rounded-full"><a target="_blank" href="https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ"><img className="w-4" src="/images/facebook.png" alt="links" /></a></li>
                    <li className="bg-green-400 hover:bg-green-500 flex items-center justify-center  ml-5 p-2 rounded-full"><a target="_blank" href="https://twitter.com/SunnyCh95881681"><img src="/images/twitter.png" alt="links" /></a></li>
                    <li className="bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center  ml-5 p-2 rounded-full"><a target="_blank" href="https://www.instagram.com/sunny674195/"><img src="/images/instagram.png" alt="links" /></a></li>
                    <li className="bg-indigo-400 hover:bg-indigo-500 flex items-center justify-center  ml-5 p-2 rounded-full"><a target="_blank" href="https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ"><img src="/images/youtube.png" alt="links" /></a></li>
                </ul>

                <p className="font-semibold text-gray-500">©2021 Pizza. All Rights Reserved.</p>

            </div>
        </div>
         </>
     )
}

export default Footer;