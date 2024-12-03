import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Layouts({Content}) {
  return (
    <div className='grid grid-cols-12'>
      <div className='hidden xl:col-span-2 xl:block lg:col-span-2 lg:block md:col-span-2 md:block'>
        <Navbar />
      </div>

      <div className='col-span-10'>
        <Content />
      </div>
    </div>
  )
}

export default Layouts