import React from 'react'
import MyCards from './components/MyCards'
import MyMoney from "./components/MyMoney"
import RecentTransfer from './components/RecentTransfer'

function Content() {
  return (
    <div className='w-full p-3'>
        <MyMoney />
        <RecentTransfer />
    </div>
  )
}

export default Content