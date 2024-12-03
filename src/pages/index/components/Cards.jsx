import React from 'react'

function Cards() {
  return (
    <div className='w-[300px] h-[150px] rounded-lg border-2 border-blue-900 bg-gray-500 text-white grid grid-rows-2'>

        <div className='flex justify-between ms-8 items-center'>
            <div 
                className='border border-gray-300 bg-gray-400 h-8 w-8 rounded'
            >
            </div>
            <div className='me-16'>
                BANK CARD
            </div>
        </div>
        <div className='w-full flex justify-center items-center text-center'>
            <p>TR51 0000 5151 0000 5151 51</p>
        </div>
    </div>
  )
}

export default Cards