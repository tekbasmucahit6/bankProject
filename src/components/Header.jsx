import React from 'react'
import { CiBank } from "react-icons/ci";
function Header() {
  return (
    <div className='bg-gray-200 py-5 px-3 flex justify-between items-center shadow-lg w-full'>
      <strong className='flex justify-center items-end text-xl gap-1'><CiBank color='blue' size={32} /> MTbank</strong>
      <p className='text-xs'>Welcom back - Mücahit Tekbaş</p>
    </div>
  )
}

export default Header