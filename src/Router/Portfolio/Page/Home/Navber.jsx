import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoDownloadOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../../assets/Onner Image/logo.png";

// Animation Variants
const menuVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = (
    <>
    
    </>
  );
  

  return (
    <div className="navbar bg-[#111827]  rounded-tl-lg rounded-tr-lg pt-6 px-4">
  <div className="navbar-start ">
    
  <Link to="/" className="text-xl md:text-3xl text-white font-bold ml-3">
  Ibrahim <span className="text-[#F6083A]">K</span>      </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
 
  <a
    href="/MERN_Stack_Developer_Ibrahim_kholilullah_Resume.pdf"
    download
    className=" md:flex items-center bg-[#F6083A] hover:bg-white hover:text-[#F6083A] border-none  text-white text-[12px] md:text-md font-semibold md:px-6 px-4 py-3 hover:rounded-none rounded-3xl border transition-all duration-300"
  >
    Download CV <IoDownloadOutline className="ml-2 hidden md:block" size={18} />
  </a>
  </div>
</div>
  
   
   
  );
};

export default Navbar;
