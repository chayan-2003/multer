import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function UserForm() {
  const [username, setUsername] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('social_media_handle', socialMediaHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      setSubmitting(true);
      
      const response = await axios.post(`${API_BASE_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload Success:', response.data);
      setMessage('Images uploaded successfully!');
      setUsername('');
      setSocialMediaHandle('');
      setImages([]);
    } catch (error) {
      console.error('Upload Error:', error);
      setMessage(error.response?.data?.message || 'An error occurred during upload.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center px-4">
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Submission Form</h2>
          
          {message && (
            <p className={`mb-4 text-center ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition duration-200"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Social Media Handle:</label>
            <input
              type="text"
              value={socialMediaHandle}
              onChange={(e) => setSocialMediaHandle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition duration-200"
              placeholder="e.g., @yourhandle"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Upload Images:</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              required
              className="w-full text-gray-700"
            />
          </div>
          
          <button
            type="submit"
            disabled={submitting}
            className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded hover:from-indigo-600 hover:to-purple-700 transition flex items-center justify-center ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {submitting && (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {submitting ? 'Uploading...' : 'Submit'}
          </button>
        </form>
      </div>
      
      <div className="flex justify-center">
        {images.length > 0 && (
          <div className="mt-6 w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-white">Selected Images:</h3>
            <div className="flex flex-wrap gap-4">
              {Array.from(images).map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="w-28 h-28 object-cover rounded shadow-lg border-2 border-indigo-500"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserForm;