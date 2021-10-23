const About =()=>{
    return(
        <>
        <div className="mt-16 mb-28 w-4/5 mx-auto flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between ">
           
            <div className=" md:w-2/3 lg:w-1/2">
                <h1 className="text-6xl font-bold text-yellow-800 mb-4">About Us</h1>
                <h2 className="text-2xl my-2 font-semibold">Hey !<br/> My name is 
                Sunny Chauhan</h2>
                <h3 className="text-xl">I am a <span className="text-green-600">Frontend Web Developer</span></h3>
                <ul className="flex items-center justify-between w-2/3 lg:w-1/3 mt-6 rounded-md">
                    <li className="bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full"><a target="_blank" href="https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ"><img className="w-4" src="/images/facebook.png" alt="links" /></a></li>
                    <li className="bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full"><a target="_blank" href="https://twitter.com/SunnyCh95881681"><img src="/images/twitter.png" alt="links" /></a></li>
                    <li className="bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full"><a target="_blank" href="https://www.instagram.com/sunny674195/"><img src="/images/instagram.png" alt="links" /></a></li>
                    <li className="bg-purple-300 hover:bg-purple-400 flex items-center justify-center p-2 rounded-full"><a target="_blank" href="https://www.youtube.com/channel/UCHTRixDSm_qIaBzQL_n5UCQ"><img src="/images/youtube.png" alt="links" /></a></li>
                </ul>
            </div>
            <div className="mb-20 lg:mb-0 flex justify-center">
            <img className="w-full lg:w-3/4" src="/images/about.svg" alt="About us" />
            </div>
        </div>
        </>
    )
}

export default About;