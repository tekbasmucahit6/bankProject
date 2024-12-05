import React from 'react'
import { Link } from 'react-router-dom'


function Button({direct,title,Icon,style}) {


  return <div className='flex flex-col justify-center items-center gap-2'>
    <div>
        <Link to={direct}><button className={style}><Icon /></button></Link>
    </div>

    <div className='text-xs'>
        <p>{title}</p>
    </div>
  </div>
}

export default Button