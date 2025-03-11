import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom"; 
import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu state
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => {
    // Make "Home" ("/dashboard") selected if path is "/dashboard"
    if (path === '/dashboard' && (window.location.pathname === '/' || window.location.pathname === '/dashboard')) {
      return true;
    }
    return window.location.pathname === path;
  };

  function mobileViewMenu() {
    return (
      <>
        {isMenuOpen && (
      <motion.nav
      initial={{ opacity: 0, y: "-100%" }} 
      animate={{ opacity: 1, y: "0%" }} 
      exit={{ opacity: 0, y: "-100%" }} 
      transition={{ duration: 0.3, ease: "easeInOut" }} 
      className="pt-4 pb-6 w-[90%] top-16 left-1/2 transform -translate-x-1/2 absolute z-50 bg-white border border-gray-200 rounded-md shadow-md lg:hidden transition-all duration-300 ease-in-out"
    >
    
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  to="/dashboard"
                  className={`inline-flex py-2 text-base font-medium text-black transition-all duration-200 ${isActive('/dashboard') ? 'text-blue-600' : 'hover:text-cyan-500  focus:text-blue-600'}`}
                >
                  Home
                </Link>
                <Link
                  to="/feature"
                  className={`inline-flex py-2 text-base font-medium text-black transition-all duration-200 ${isActive('/features') ? 'text-blue-600' : 'hover:text-cyan-500 focus:text-blue-600'}`}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className={`inline-flex py-2 text-base font-medium text-black transition-all duration-200 ${isActive('/pricing') ? 'text-blue-600' : 'hover:text-cyan-500 focus:text-blue-600'}`}
                >
                  Pricing
                </Link>
                <Link
                  to="/Policy"
                  className={`inline-flex py-2 text-base font-medium text-black transition-all duration-200 ${isActive('/Policy') ? 'text-blue-600' : 'hover:text-cyan-500 focus:text-blue-600'}`}
                >
                  Policy
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                to="#"
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </>
    );
  }

  function mainHeader() {
    return (
      <>
        <nav className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <div
              className="text-2xl font-bold cursor-pointer text-gray-900"
              onClick={() => navigate("/dashboard")}
            >
              <img src={Logo} width={120} alt="Logo" />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu} // Toggle menu visibility
          >
            {/* Menu open icon */}
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            {/* Menu close icon */}
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu items for larger screens */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              to="/dashboard"
              className={`text-base font-medium text-black transition-all duration-200 ${isActive('/dashboard') ? 'text-blue-600' : 'hover:text-cyan-500  focus:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              to="/feature"
              className={`text-base font-medium text-black transition-all duration-200 ${isActive('/feature') ? 'text-blue-600' : 'hover:text-cyan-500  focus:text-blue-600'}`}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className={`text-base font-medium text-black transition-all duration-200 ${isActive('/pricing') ? 'text-blue-600' : 'hover:text-cyan-500  focus:text-blue-600'}`}
            >
              Pricing
            </Link>
            <Link
              to="/Policy"
              className={`text-base font-medium text-black transition-all duration-200 ${isActive('/Policy') ? 'text-blue-600' : 'hover:text-cyan-500  focus:text-blue-600'}`}
            >
              Policies
            </Link>
          </div>

          {/* "Get in Touch" Button */}
          <Link
            to="#"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Get in Touch
          </Link>
        </nav>
      </>
    );
  }

  return (
    <header className="flex justify-between items-center px-2 py-[1px] shadow-md rounded-b-lg bg-white relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        {/* Main navigation container */}
        {mainHeader()}

        {/* Mobile Menu */}
        {mobileViewMenu()}
      </div>
    </header>
  );
}
