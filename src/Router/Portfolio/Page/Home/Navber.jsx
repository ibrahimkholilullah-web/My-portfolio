import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../../assets/Onner Image/logo.png"
import { IoDownloadOutline } from 'react-icons/io5';
const Navber = () => {

const dataInfo = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'border-b-2 rounded-none hover:text-white bg-[#111827] border-[#EF0E2D] text-white' : ' hover:text-white hover:border-b-2 hover:border-[#EF0E2D] rounded-none'
        }
      >
        Home
      </NavLink>
    </li>
   
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'border-b-2 rounded-none hover:text-white bg-[#111827] border-[#EF0E2D] text-white' : ' hover:text-white hover:border-b-2 hover:border-[#EF0E2D] rounded-none'
        }
      >
        About Me
      </NavLink>
    </li>
  </>
);


    return (
        <div className="navbar container  mx-auto py-8 fixed z-10  bg-[#111827] ">
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
              className="menu menu-sm uppercase dropdown-content   rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black">
              {dataInfo}
            </ul>
          </div>
          <img className='md:w-12 w-8 text-white border rounded-full' src={logo} alt="" />
          <Link to="/" className="btn btn-ghost text-xl md:text-3xl ">Ibarhim <span className='text-[#F6083A]'>K</span></Link>
        </div>
        <div className="navbar-center hidden uppercase lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 space-x-10 text-[#AFB3CA]">
           {dataInfo}
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/MERN_Stack_Developer_Ibrahim_kholilullah_Resume.pdf' download='/MERN_Stack_Developer_Ibrahim_kholilullah_Resume.pdf' className="btn rounded-3xl hover:text-[#F6083A] hover:bg-white border-none text-[10px]   bg-[#F6083A] inline-flex items-center md:px-8 px-4 md:text-[16px]  text-white uppercase">Download CV <IoDownloadOutline size={15} />
          </a>
        </div>
      </div>
    );
};

export default Navber;