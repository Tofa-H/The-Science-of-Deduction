import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import sherlocked from "../assets/sherlocked.png"
import BlogContext from '../contexts/BlogContext';


export default function FullBlog() {
    const { blog_id } = useParams();
    const blogs = useContext(BlogContext)
    let blog;

    // i becomes each item
    for (let i of blogs) {
        if (blog_id == i.id) {
            blog = i
        }
    }

    console.log("watchingblog", blogs)
    if (!blogs) {
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
                        <h1 className='text-2xl font-serif font-bold text-gray-500 mb-2'>{blog?.title}</h1>
                        <div className='text-gray-300 mb-2 font-serif'>{blog?.body}</div>
                        <div className='text-sm text-gray-600 font-serif'>createdAt: {blog?.created_at}</div>
                        <div className='flex space-x-2 mt-2'>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
