import { useState } from 'react'
import AdminDashboard from  './components/AdminDashboard'
import UserForm from './components/UserForm';
import  Home from './pages/Home'
import Navbar from './components/Navbar';
import Adminlogin from './components/Adminlogin';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path="/user" element={<UserForm/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/adminlogin" element={<Adminlogin/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
