import React from 'react'
import Cards from './Cards'

function MyCards() {
  return (
    <div className='w-full p-5 flex justify-center items-center gap-16'>
        <Cards />
        <Cards />
        <Cards />
    </div>
  )
}

export default MyCards