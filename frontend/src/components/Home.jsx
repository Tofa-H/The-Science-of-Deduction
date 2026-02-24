import React, { useEffect, useState, useContext } from 'react'
import BlogCard from './blogCard'
import Hero from './hero'
import BlogContext from '../contexts/BlogContext';


export default function Home() {
    // ai child (home) khabar khaite chay, Aijonno table(useContext) use kore table theke khabar khaite pare
    const blogs = useContext(BlogContext);
    console.log(blogs)

    return (
        <div>
            Home
            <Hero />
            <div className='grid grid-cols-2 bg-linear-to-b from-yellow-50 to-yellow-100 min-h-screen p-4'>
                {blogs.map(blog => (
                    <BlogCard
                        key={blog.id} // Unique key is mandatory
                        id={blog.id}
                        title={blog.title}
                        body={blog.body}
                        createdAt={blog.createdAt}
                        upCount={blog.upcount}
                        downCount={blog.downcount}
                    />
                ))}
            </div>
        </div>
    )
}
