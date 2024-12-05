import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";
function CryptoWallet() {
  return (
    <div className='flex flex-col justify-center items-center p-5 w-full'>


        <div className='flex flex-col justify-center items-start w-full text-center'>
            <strong>CRYPTO WALLETS</strong>
            <hr className='w-full bg-black  my-3' />
        </div>
        <div className='flex justify-center items-center w-full'>
            <ul className='w-full'>
            <li className='grid grid-cols-3 w-full bg-gray-100 px-2 py-1 rounded my-2 text-center'><span>NASDAQ</span> <span className='text-red-500'>-15%</span> <span className='text-red-500'>-1200$</span></li>
            <li className='grid grid-cols-3 w-full bg-gray-100 px-2 py-1 rounded my-2 text-center'><span>GOLD</span> <span className='text-green-500'>15%</span> <span className='text-green-500'>1200$</span></li>
            <li className='grid grid-cols-3 w-full bg-gray-100 px-2 py-1 rounded my-2 text-center'><span>TESLA</span> <span className='text-green-500'>24%</span> <span className='text-green-500'>800$</span></li>
            <li className='grid grid-cols-3 w-full bg-gray-100 px-2 py-1 rounded my-2 text-center'><span>GOOGLE</span> <span className='text-red-500'>-60%</span> <span className='text-red-500'>-7900$</span></li>
            <li className='grid grid-cols-3 w-full bg-gray-100 px-2 py-1 rounded my-2 text-center'><span>APPLE</span> <span className='text-green-500'>-15%</span> <span className='text-green-500'>2400$</span></li>
            <li className='flex justify-center items-center'><button className='flex justify-center items-center px-3 py-2 border border-zinc-950 rounded-xl my-3 hover:bg-gray-100 transition-all gap-2'>View More  <MdOutlineRefresh size={20} /></button></li>
            </ul>
        </div>


    </div>
  )
}

export default CryptoWallet