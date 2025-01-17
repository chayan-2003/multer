import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin', 'admin');
      setMessage('Login successful!');
      navigate('/admin');
    } else {
      setMessage('Invalid username or password.');
    }
  };


  return (
    
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl mb-4 text-center">Admin Login</h2>
        {message && (
          <div 
            className={`mb-4 text-center ${
              message === 'Login successful!' ?  ' text-green-500' : 'text-red-500'
            }`}
          >

            {message}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Adminlogin;