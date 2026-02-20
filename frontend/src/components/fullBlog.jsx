import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import sherlocked from "../assets/sherlocked.png"

export default function FullBlog() {
    const { blog_id } = useParams();
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/blogs/?id=${blog_id}`)
            .then(response => response.json())
            .then(data => {
                setBlog(data);
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])
    console.log(blog)
    if (!blog) {
        return (
            <div>
                Loading..
            </div>
        )
    }
    return (
        <div>
            <Link to="/">Back</Link>
            <div className='m-1 p-2 bg-slate-800 rounded-lg border-2  border-yellow-700 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={sherlocked} width={200}></img>
                    <div className='text-center mt-4'>
                        <h1 className='text-2xl font-serif font-bold text-gray-500 mb-2'>{blog[0]?.title}</h1>
                        <div className='text-gray-300 mb-2 font-serif'>{blog[0]?.body}</div>
                        <div className='text-sm text-gray-600 font-serif'>createdAt: {blog[0]?.created_at}</div>
                        <div className='flex space-x-2 mt-2'>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
