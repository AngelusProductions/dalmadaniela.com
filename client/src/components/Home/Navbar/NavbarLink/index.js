import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const NavbarLink = ({ name, path, side, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  
  return tooltip != null ? (
    <div className='inactiveNavbarLinkContainer'>
      <span 
        className={`navbarLink ${side === 'left' ? 'left' : 'right'} inactive`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      > 
        {name}
      </span>
      {showTooltip && (
        <span className='navbarTooltip'>{tooltip}</span>
      )}
    </div>
  ) : (
    <Link to={path} className={`navbarLink ${side === 'left' ? 'left' : 'right'} active`}>
      {name}
    </Link>
  )
}

export default NavbarLink