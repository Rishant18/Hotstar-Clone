import React from 'react'
import { Link } from 'react-router-dom'
function Myspace() {
    return (
        <>
            <div className="bg-black h-32 text-white flex flex-col items-center">

                <div className="w-full  pb-4">
                    <img
                        src="https://images.pexels.com/photos/15498187/pexels-photo-15498187.jpeg"
                        alt="Starry Night"
                        className="w-full h-32 object-cover opacity-20"
                    />
                </div>
            </div>

            <div className="bg-[#0a0c16] text-white flex  flex-col gap-4 px-4 text-center max-w items-center  h-screen">
                <img className='size-30 w-2xs'
                    src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/feature/myspace/my_space_login_in_jv.png" alt="logo" />
                <h2 className='text-4xl'>Login to Hotstar</h2>
                <p className=' opacity-60'>Start watching from where you left, personalise for kids and more</p>
                <Link to="/Loginpage">
                    <button
                        className="px-20 py-3 text-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg hover:scale-105 cursor-pointer ">
                        Log In
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Myspace
