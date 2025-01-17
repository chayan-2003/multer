import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const clicked = () => {
      if (localStorage.getItem('admin')) {
        navigate('/admin');
      }
      else {
        navigate('/adminlogin');
      }
    };
  
    return (
      <div>
        <Navbar />
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
  
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Choose your role to get started.
            </p>
            <div className="flex space-x-6 justify-center">
              <Link to="/user">
                <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition shadow-md">
                  User
                </button>
              </Link>
  
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition shadow-md" onClick={clicked}>
  
                Admin
              </button>
  
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;