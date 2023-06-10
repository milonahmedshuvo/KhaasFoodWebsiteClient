import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer, FaFacebookMessenger, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';



const Header2 = () => {


    const manuber = <>

        <li> <Link to='/' className='text-red-500'> HOME</Link>   </li>
        <li> <Link to='/products'> PRODUCTS</Link>   </li>
        <li> <Link to='/'> BLOG</Link>   </li>
        <li> <Link to='/'> CAREER</Link>   </li>
    </>





    return (
        <div className=''>
            <p className='bg-[#83B735] py-3 w-full'></p>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">



                            {manuber}


                        </ul>
                    </div>

                    <img className='h-[50px] w-[200px] ml-[100px]' src="https://www.khaasfood.com/wp-content/uploads/2023/01/New-Project-22.webp" alt="" />


                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">



                        {manuber}
                    </ul>
                </div>
                <div className="navbar-end">
                   <FaFacebookMessenger className='text-2xl text-[#00A3FF] mr-2'/>
                   <FaInstagramSquare className='text-2xl text-[#C83089] mr-2'/>
                   <FaLinkedin className='text-2xl text-[#0077B5] mr-2'/>
                   <FaYoutubeSquare className='text-2xl text-[#FF0000] mr-2'/>
                </div>
            </div>
        </div>
    )
}

export default Header2
