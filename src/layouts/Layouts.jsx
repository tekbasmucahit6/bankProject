import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Layouts({Content}) {
  return (
    <div className='xl:grid lg:grid md:grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12'>
      {/* navbar active on xl,lg,md screen */}
      <div className='hidden xl:col-span-2 xl:block lg:col-span-2 lg:block md:col-span-2 md:block'>
        <Navbar />
      </div>

      {/* header active on sm screen */}
      <div className='block xl:hidden lg:hidden md:hidden'>
        <Header />
      </div>
      <div className=' xl:col-span-10 lg:col-span-10 md:col-span-10'>
        <Content />
      </div>
    </div>
  )
}

export default Layouts