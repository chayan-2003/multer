import { useState } from 'react'
import AdminDashboard from  './components/AdminDashboard'
import UserForm from './components/UserForm';
import  Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path="/user" element={<UserForm/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
