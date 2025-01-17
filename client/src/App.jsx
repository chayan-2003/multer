// filepath: /C:/Users/User/Desktop/company1/client/src/App.jsx
import React from 'react';
import AdminDashboard from './components/AdminDashboard';
import UserForm from './components/UserForm';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          <Route path="/user" element={<UserForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;