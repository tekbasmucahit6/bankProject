import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { TbTransferVertical } from "react-icons/tb";
import Button from './Button';
function Money() {
  return (
    <div className='px-2 h-full'>
        <div className='bg-gradient-to-b from-blue-600 to-blue-900 flex flex-col justify-center items-start ps-5 gap-3 h-2/4 text-white rounded-b-xl'>
            <p className='text-xs'>usd account - Türkiye/İstanbul</p>
            <strong className='text-4xl'>5000$</strong>
        </div>
        <div className='grid grid-cols-3 h-2/4'>
        <Button Icon={FaArrowDown} style={"bg-blue-600 px-2 py-1 rounded text-white text-xl"} title={"Add Money"} />
        <Button Icon={FaArrowUp} style={"bg-blue-600 px-2 py-1 rounded text-white text-xl"} title={"Send Money"} />
        <Button Icon={TbTransferVertical} style={"bg-blue-600 px-2 py-1 rounded text-white text-xl"} title={"Transaction"} />
        </div>
    </div>
  )
}

export default Money