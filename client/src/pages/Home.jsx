import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome to the Application</h1>
            <div className="flex space-x-4">
                <Link to="/user">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        User
                    </button>
                </Link>
                <Link to="/admin">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Admin
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;