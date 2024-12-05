import React from 'react'
import Cards from './Cards'

function MyCards() {
  return (
    <div className='w-full p-5 flex justify-start items-center gap-8'>
        <Cards />
        <Cards />
        <Cards />
        
    </div>
  )
}

export default MyCards