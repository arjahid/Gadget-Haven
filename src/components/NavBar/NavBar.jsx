import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";



const NavBar = () => {
    const links=<>
    <li className="font-bold text-white "><NavLink to='/'>Home</NavLink></li>
    <li className="font-bold text-white"><NavLink to='/statistic'>Statistics</NavLink></li>
    <li className="font-bold text-white"><NavLink to='/dashboard'>Dashboard</NavLink></li>
   
     </>
    return (
        <div className="navbar bg-[#9538E2]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-white">Gadget Haven</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-xl  mr-2 text-red-300 rounded-3xl bg-white"><CiShoppingCart /></a>
          <a className="btn btn-outline text-red-300 rounded-3xl bg-white"><GiSelfLove /></a>
        </div>
      </div>
    );
};

export default NavBar;