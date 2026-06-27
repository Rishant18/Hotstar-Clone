import React from 'react'

function Footer() {
    return (
        <>
            <div className="bg-[#0a0c16] text-white flex  pl-30 gap-72">
                <div className=" opacity-100 pt-40 w-max">
                    <h2>Company</h2>
                    <div className="pt-7 opacity-60 cursor-pointer ">
                        <ul>
                            <li className='hover:underline'> About us</li><br />
                            <li className='hover:underline'> Carrers</li>
                        </ul>
                    </div>
                </div>
                <div className="  opacity-100 pt-40 w-max">
                    <h2>View website in</h2>
                    <div className=" pt-7 opacity-60 cursor-pointer hover:underline">
                        <ul>
                            <li>
                                English
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" opacity-100 pt-40 w-max">
                    <h2>Need Help?</h2>
                    <div className="pt-7 opacity-60 cursor-pointer">
                        <ul>
                            <li className='hover:underline'> Visit Help Center</li>
                            <br />
                            <li className='hover:underline'>Share Feedback</li>

                        </ul>
                    </div>
                </div>

                <div className=" opacity-100  pt-40 w-max ">
                    <h2>Connect with Us</h2>
                    <div className="pt-7 opacity-60 cursor-pointer">
                        <ul>
                            <li>
                                About us

                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bg-[#0a0c16] text-white pl-30 pt-10 pb-10 ">
                <p className="opacity-60">
                    © 2025 Hotstar Clone. All Rights Reserved.
                </p>

                <div className="flex gap-6 mt-3 opacity-60 hover:text-white   cursor-pointer ">
                    <span className='hover:underline' >Terms of Use</span>
                    <span className='hover:underline' >Privacy Policy</span>
                    <span className='hover:underline' >FAQ</span>
                </div>
            </div>

        </>
    )
}


export default Footer
