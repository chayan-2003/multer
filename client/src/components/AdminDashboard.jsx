import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  
  const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;
  
  const fetchData = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${API_BASE_URL}/api/dashboard`,
       
    });
      console.log('API Response:', response.data);
      setSubmissions(response.data.data.users);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath); 
  };

  const handleClosePopup = () => {
    setSelectedImage(null); 
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="text-xl">Loading...</div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center">
            <div className="text-xl text-red-500">{error}</div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Social Media Handle</th>
                  <th className="py-3 px-6 text-left">Images</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {submissions.length > 0 ? (
                  submissions.map((user) => (
                    <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">{user.username}</td>
                      <td className="py-3 px-6 text-left">{user.social_media_handel}</td>
                      <td className="py-3 px-6 text-left">
                        {user.image && user.image.length > 0 ? (
                          <div className="flex space-x-2">
                            {user.image.map((imgPath, index) => (
                              <img
                                key={index}
                                src={`${API_BASE_URL}/${imgPath.replace(/\\/g, '/')}`}
                                alt={`User ${user.username} Image ${index + 1}`}
                                className="w-16 h-16 object-cover rounded cursor-pointer"
                                loading="lazy"
                                onClick={() => handleImageClick(imgPath)} 
                              />
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-500">No images available.</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-3 px-6 text-center">
                      No submissions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {submissions.length === 0 && (
              <div className="text-center mt-4 text-gray-500">No submissions found.</div>
            )}
          </div>
        )}

        {/* Popup for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" 
            onClick={handleClosePopup} 
          > 
            <div 
              className="bg-white p-4 rounded shadow-lg" 
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            > 
              <img 
                src={`${API_BASE_URL}/${selectedImage.replace(/\\/g, '/')}`} 
                alt="Enlarged Image" 
                className="max-w-lg object-contain" 
              /> 
              {/* Close Button */}
              <button 
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div> 
          </div> 
        )} 

      </div>
    </div>
  );
};

export default AdminDashboard;