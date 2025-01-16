import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center">
                    <Link 
                        to="/" 
                        className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 transition duration-300"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;