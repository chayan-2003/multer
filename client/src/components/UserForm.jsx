import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function UserForm() {
  const [username, setUsername] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };
  const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;
  console.log(import.meta.env.PROD);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('social_media_handel', socialMediaHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/submission/create`, formData, {
       
      });
      console.log(response);
      setSubmitting(true);
    } catch (error) {
      console.error('Error submitting user:', error);
    }
  };

  return (
    <div>
      <Navbar />
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex items-center justify-center"> 
  
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Submit Your Social Media
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="socialMediaHandle" className="block text-sm font-medium text-gray-700">
              Social Media Handle
            </label>
            <input
              type="text"
              id="socialMediaHandle"
              value={socialMediaHandle}
              onChange={(e) => setSocialMediaHandle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Upload Images (optional)
            </label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
          {submitting && <div className="text-green-500 text-center">Submitted successfully!</div>}
        </form>
      </div>
    </div>
    </div>
  );
}

export default UserForm;