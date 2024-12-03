import React from 'react'

function MyMoney() {
  return (
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 my-10 gap-2 p-5'>


      <div className='flex justify-center items-center bg-white rounded'>
          <p className='text-xl'>5000$</p>
      </div>

      <div className='flex flex-col justify-center items-center bg-white p-5 rounded'>
        <strong>RECENTLY TRANSFER</strong>
        <ul className='w-full'>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all'><span>Trendyol</span> <span>5.000$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all'><span>Netflix</span> <span>60$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all'><span>Spotify</span> <span>129$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all'><span>Gym</span> <span>1.000$</span></li>
          <li className='flex justify-between items-center bg-gray-200 px-2 py-1 rounded mt-2 shadow hover:scale-105 transition-all'><span>Hosting</span> <span>12.000$</span></li>
        </ul>
      </div>

    </div>
  )
}

export default MyMoney