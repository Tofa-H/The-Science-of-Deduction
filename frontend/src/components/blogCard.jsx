import React from 'react'
import sherlocked from "../assets/sherlocked.png"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function BlogCard(props) {
    console.log(props)
    return (
        <div className='m-4 p-6 bg-slate-800 rounded-lg border-2 border-yellow-700 shadow-lg hover:shadow-xl transition-shadow'>
            <div className='flex flex-col justify-center items-center'>
                <img src={sherlocked} width={200}></img>
                <div className='text-center mt-4'>
                    <h1 className='text-2xl font-serif font-bold text-gray-500 mb-2'>{props.title}</h1>
                    <div className='text-gray-300 mb-2 font-serif'>{props.body}</div>
                    <div className='text-sm text-gray-600 font-serif'>{props.createdAt}</div>
                    <div className='flex space-x-2 mt-2'>
                        <button className='bg-slate-700 hover:bg-slate-600 p-1 rounded-md'>
                            <MdKeyboardArrowUp color='white' size={20} />
                            <p className='text-white'>{props.upCount}</p>
                        </button>
                        <button className='bg-slate-700 hover:bg-slate-600 p-1 rounded-md'>
                            <MdKeyboardArrowDown color='white' size={20} />
                            <p className='text-white'>{props.downCount}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}