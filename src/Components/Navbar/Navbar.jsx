import React from 'react';
import { NavLink } from 'react-router';
import NavLogo from '/logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-[#EFEFEF]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/Bokings">Bokings</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/Blogs">Blogs</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
            </ul>
          </div>
         <div className='hidden lg:flex justify-center items-center'>
            <img className='w-5 h-5 mt-0.5' src={NavLogo} alt="" />
            <h4 className='text-black font-bold text-xl '>DocSpot</h4>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/bokings">Bokings</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/blogs">Blogs</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
         
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn rounded-3xl text-white px-6 bg-[#176AE5]">Emergency</button>
        </div>
      </div>
    );
};

export default Navbar;