import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";
function RecentTransfer() {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-white'>
        <div className='flex justify-between items-center w-full px-1'>
          <strong>RECENTLY TRANSFER</strong>
          <strong className='text-xl'> {">"} </strong>
        </div>
        <hr className='text-xl my-2 w-full'/>
        <ul className='w-full'>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all hover:cursor-pointer'><span>Trendyol</span> <span>5.000$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all hover:cursor-pointer'><span>Netflix</span> <span>60$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all hover:cursor-pointer'><span>Spotify</span> <span>129$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all hover:cursor-pointer'><span>Gym</span> <span>1.000$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all hover:cursor-pointer'><span>Hosting</span> <span>12.000$</span></li>
          <li className='flex justify-center items-center mt-5'><button className='border border-gray-600 hover:bg-gray-100 transition-all text-zinc-950 px-4 py-2 rounded-xl flex justify-center items-center gap-2'>View More <MdOutlineRefresh size={20} /></button></li>
        </ul>
    </div>
  )
}

export default RecentTransfer