import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_BASE_URL =
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/dashboard`);
      console.log('API Response:', response.data);

      // Ensure the backend returns { data: { users: [...] } }
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

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 mt-10">
        {/* Header Section with Logout Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center"
          >
            {/* Logout Icon (Optional) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm14.293 9.707a1 1 0 010-1.414L16.414 12H9a1 1 0 110-2h7.414l-1.879-1.879a1 1 0 111.414-1.414l3.586 3.586a1 1 0 010 1.414l-3.586 3.586a1 1 0 01-1.414-1.414L16.414 14H9a1 1 0 110-2h7.414l-1.879-1.879z"
                clipRule="evenodd"
              />
            </svg>
            Logout
          </button>
        </div>

        {/* Loading, Error, and Submissions Table */}
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
                      <td className="py-3 px-6 text-left">{user.social_media_handle}</td>
                      <td className="py-3 px-6 text-left">
                        {user.imageUrls && user.imageUrls.length > 0 ? (
                          <div className="flex space-x-2">
                            {user.imageUrls.map((imgUrl, index) => (
                              <img
                                key={index}
                                src={imgUrl} // Use the full image URL directly
                                alt={`User ${user.username} Image ${index + 1}`}
                                className="w-16 h-16 object-cover rounded cursor-pointer"
                                loading="lazy"
                                onClick={() => handleImageClick(imgUrl)}
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

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleClosePopup}
          >
            <div
              className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
              <img
                src={selectedImage} // Use the full image URL directly
                alt="Enlarged Image"
                className="w-full object-contain"
              />
              {/* Close Button */}
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
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