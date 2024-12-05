import React from 'react'
import MyCards from './MyCards';
import Money from './Money';
import CryptoWallet from './CryptoWallet';
function MyMoney() {
  return (
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 my-5 gap-5'>

      <div className='bg-white min-h-[400px] rounded'>
        <Money />
      </div>

      <div className='flex flex-col justify-start items-center bg-white rounded'>
          <CryptoWallet />
      </div>

    </div>
  )
}

export default MyMoney