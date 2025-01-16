import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md fixed top-0 left-0 right-0 z-50"> 
      <div className="container mx-auto px-4 py-3 flex justify-between items-start text-white"> 
        <Link to="/" className="text-sm font-bold flex ">
          Social Media App
        </Link>
        <div className="flex space-x-4"> 
        <Link to="/" className="hover:text-white"> 
            Home
          </Link> 
          <Link to="/about" className="hover:text-white"> 
            About
          </Link> 

        </div>
      </div>
    </nav>
  );
};

export default Navbar;