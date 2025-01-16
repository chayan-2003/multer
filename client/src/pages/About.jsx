import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen"> 
      <Navbar /> 
      <div className="container mx-auto p-8 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About This App</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            This application allows users to easily share their social media presence. 
          </p>
          <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc ml-6">
            <li>User-friendly submission form</li>
            <li>Secure data storage</li>
            <li>Admin dashboard for easy data management</li>
            <li>Ability to upload multiple images</li> 
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Task Objective:</h2>
          <p className="text-lg text-gray-700">
            This project aims to develop a system that effectively collects and displays 
            user information, including their name, social media handle, and uploaded images. 
          </p>
          <p className="text-lg text-gray-700">
            The focus is on building a robust and user-friendly application that demonstrates 
            your skills in frontend development (React), backend development (if applicable), 
            and database interaction.
          </p>
          <p className="text-1xl text-gray-700 mt-4 font-extrabold">
            To access the admin dashboard, use the following credentials:
          </p>
          <ul className="list-disc ml-6">
            <li>Username: admin</li>
            <li>Password: admin123</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;