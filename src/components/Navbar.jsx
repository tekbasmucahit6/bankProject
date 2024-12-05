import React from 'react'
import { Link } from 'react-router-dom'
import { CiBank } from "react-icons/ci";
import NavLink from "./NavLink"

function Navbar() {
  return (
    <div className='bg-gradient-to-b from-zinc-950 to-blue-900 h-full min-h-screen flex flex-col justify-start items-center py-4'>
        <Link 
            to={"/"}
        >
            <strong className='flex justify-center items-end text-xl gap-1 text-white'><CiBank color='blue' size={32} /> MTbank</strong>
        </Link>

        <div className='flex flex-col justify-center items-start gap-2 mt-16 w-full ps-3'>
            <NavLink title={"Home"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/"} />
            <NavLink title={"Transfer"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/transfer"} />
            <NavLink title={"Market Place"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/"} />
        </div>

        <div className='flex justify-center text-center items-end h-full w-full'>
          <Link to={"/"}>
            <p className='text-white'>Log In</p>
          </Link>
        </div>
    </div>
  )
}

export default Navbar