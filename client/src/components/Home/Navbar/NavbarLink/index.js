import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const NavbarLink = ({
    id,
    name, 
    path, 
    tooltip, 
    setHoveringLinkId
}) => {
  return tooltip != null ? (
    <span 
        className='navbarLink inactive'
        onMouseEnter={() => setHoveringLinkId(id)}
        onMouseLeave={() => setHoveringLinkId(null)}
    > 
        {name}
    </span>
  ) : (
    <Link 
        to={path} 
        className={`navbarLink active clickable`}
    >
      {name}
    </Link>
  )
}

export default NavbarLink