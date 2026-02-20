import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import BlogCard from './components/blogCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullBlog from './components/fullBlog'
import Home from './components/Home'

// App.jsx is our entry point to the app. We will never keep any funational full component here. We should abstract away main functionalities. We will only keep authentication, routes, etc
// It will give a birds eye view of the website/ application, like a entry door for a house. 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog/:blog_id" element={<FullBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
