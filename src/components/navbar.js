
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-orange-200 h-14' >
      <div className='container mx-auto py-2 px-2 md:px-2 flex justify-between items-center relative'>
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 md:w-28 object-contain mr-24"
          />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='outline-none focus:outline-none'>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-white z-20 py-2 md:py-0 md:bg-transparent`}>
          <ul className='flex flex-col md:flex-row items-center md:items-baseline md:space-x-4'>
            <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/' onClick={toggleMenu}>Home</Link></li>
            <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/about' onClick={toggleMenu}>About</Link></li>
            {/* <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/contact' onClick={toggleMenu}>Contact</Link></li> */}
            <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/services' onClick={toggleMenu}>Services</Link></li>
            <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/career' onClick={toggleMenu}>Career </Link></li>

             <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/contact' onClick={toggleMenu}>Contact</Link></li>
            {/* <li className="text-gray-700 hover:text-gray-900 py-2 px-3 border-b-2 border-transparent hover:border-gray-800"><Link to='/services' onClick={toggleMenu}>Services</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
