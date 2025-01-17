import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex flex-col"> 
      <Navbar /> 
      <div className="container mx-auto p-8 mt-10">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white">About This App</h1>
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <p className="text-lg text-gray-800 mb-6">
            This application allows users to easily share their social media presence by submitting their username, social media handle, and uploading multiple images.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Key Features:</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>User-friendly submission form</li>
            <li>Secure data storage with MongoDB</li>
            <li>Admin dashboard for easy data management</li>
            <li>Ability to upload multiple images seamlessly</li> 
            <li>Image handling using Cloudinary and Multer</li>
            <li>Robust REST APIs for efficient data handling</li>
            <li>State management using Context API to wrap the Admin Dashboard</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Technologies Used:</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li><strong>Frontend:</strong> React with Tailwind CSS for a sleek and responsive design</li>
            <li><strong>State Management:</strong> Context API for managing authentication and state across components</li>
            <li><strong>Backend:</strong> Node.js and Express.js</li>
            <li><strong>Database:</strong> MongoDB for efficient data storage</li>
            <li><strong>Image Upload:</strong> Multer middleware for handling multipart/form-data and Cloudinary for image storage</li>
            <li><strong>API:</strong> Implemented RESTful APIs for seamless communication between frontend and backend</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Task Objective:</h2>
          <p className="text-lg text-gray-800 mb-4">
            This project aims to develop a system that effectively collects and displays user information, including their name, social media handle, and uploaded images. The focus is on building a robust and user-friendly application that demonstrates your skills in frontend development (React), backend development (Node.js & Express.js), and database interaction (MongoDB).
          </p>
          
          <p className="text-lg text-gray-800 font-semibold">
            To access the admin dashboard, use the following credentials:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li><strong>Username:</strong> admin</li>
            <li><strong>Password:</strong> admin123</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;