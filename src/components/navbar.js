import React, { useState } from 'react';

const Navbar = () => {
 

  return (
    <nav className={`bg-${isDarkMode ? 'gray-900' : 'blue-500'} text-b p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-semibold text-lg">Logo</a>

        <div className="flex items-center space-x-4">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/services" className="hover:text-gray-200">Services</a>
          <a href="/contact" className="hover:text-gray-200">Contact Us</a>
          <a href="/about" className="hover:text-gray-200">About Us</a>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
