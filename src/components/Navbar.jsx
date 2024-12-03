import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from "./NavLink"

function Navbar() {
  return (
    <div className='bg-slate-950 h-screen flex flex-col justify-start items-center py-4'>
        <Link 
            to={"/"}
        >
            <strong className='text-white text-xl'>MT BANK</strong>
        </Link>

        <div className='flex flex-col justify-center items-start gap-2 mt-16 w-full ps-3'>
            <NavLink title={"Home"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/"} />
            <NavLink title={"Transfer"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/transfer"} />
            <NavLink title={"Market Place"} style={"text-white w-full hover:bg-zinc-800 p-2 rounded"} link={"/"} />
        </div>
    </div>
  )
}

export default Navbar