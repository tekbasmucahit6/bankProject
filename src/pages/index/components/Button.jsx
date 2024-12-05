import React from 'react'
function Button({title,Icon,style}) {
  return <div className='flex flex-col justify-center items-center gap-2'>
    <div className={style}>
        <button><Icon /></button>
    </div>

    <div className='text-xs'>
        <p>{title}</p>
    </div>
  </div>
}

export default Button