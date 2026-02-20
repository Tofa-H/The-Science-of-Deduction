import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import BlogCard from './components/blogCard'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  console.log(blogs)


  return (
    <>
      <Navbar />
      <Hero />
      <div className='grid grid-cols-2 bg-linear-to-b from-yellow-50 to-yellow-100 min-h-screen p-4'>
        {blogs.map(blog => (
          <BlogCard
            key={blog.id} // Unique key is mandatory
            title={blog.title}
            body={blog.body}
            createdAt={blog.createdAt}
            upCount={blog.upcount}
            downCount={blog.downcount}
          />
        ))}
      </div>
    </>
  )
}

export default App
