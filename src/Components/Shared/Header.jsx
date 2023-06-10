import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DiclareContext } from '../AuthProviderApp/AuthProviderApp'






const Header = () => {
         
          const {user }= useContext(DiclareContext)
          console.log(user)

        


  const manuber = <>

    <li> <Link to='/register' className='text-red-500'>REGISTER</Link>   </li>
    <li> <Link to='/login' className='text-red-500'>LOGIN</Link>   </li>
    <li> <Link to='/'> PRODUCTS</Link>   </li>
    <li> <Link to='/'> BLOG</Link>   </li>
    <li> <Link to='/'> CAREER</Link>   </li>
   

  </>





  return (
    <div className=''>
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
          <button className='ml-[80px] text-[15px]'> BROWSE CATEGORIES </button>
        </div>

        {/* maj kane  */}
        <div className="navbar-center w-2/5 hidden lg:flex">

          <input type="text" placeholder="Search here" className="input input-bordered rounded-full input-success w-full " />
        </div>



        <div className="navbar-end hidden lg:flex">

          <ul className="menu menu-horizontal px-1">


            {manuber}



          </ul>

        </div>

      </div>
    </div>
  )
}

export default Header
