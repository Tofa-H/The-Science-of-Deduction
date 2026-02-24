import { useState, useEffect, useContext } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import BlogCard from './components/blogCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullBlog from './components/fullBlog'
import Home from './components/Home'
import BlogContext from './contexts/BlogContext'

// App.jsx is our entry point to the app. We will never keep any funational full component here. We should abstract away main functionalities. We will only keep authentication, routes, etc
// It will give a birds eye view of the website/ application, like a entry door for a house. 
// inside return is always jsx (all the ui things), all the javascript logics are outside return


// app hoche abbu 
function App() {
  const [blogs, setBlogs] = useState([])

  //useeffect hoche abba bazar theke fastfoods anse
  useEffect(() => {
    fetch('http://localhost:5000/api/blogs/')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    //CreatContext hoche amma, table (useContext) a khabar gula dise, shob khabar (blogs)
    <BlogContext.Provider value={blogs}>
      {/* shob components hoche childs, jar echa jeta khabe, naile nai */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog/:blog_id" element={<FullBlog />} />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  )
}

export default App
