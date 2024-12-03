import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({title,link,style}) {
  return <Link to={link} className={style}><div><p>{title}</p></div></Link>
}

export default NavLink