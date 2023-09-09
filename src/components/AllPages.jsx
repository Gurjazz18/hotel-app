import React from 'react'
import {

    Routes,
    Route,
  } from "react-router-dom";
import Hotels from '../Pages/Hotels';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import SinglePage from '../Pages/SinglePage';



const AllPages = () => {
  
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Hotel" element={<Hotels/>} />
          <Route path="/Hotel/:id" element={<SinglePage/>} />
        
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
          
          
         
      
         
         
      
    </Routes>
  )
}

export default AllPages