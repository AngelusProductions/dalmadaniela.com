import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

import './index.scss'

const NavbarLink = ({
    id,
    name, 
    path, 
    tooltip
}) => {
  return tooltip != null ? (
    <Tooltip 
      className='navbarTooltip'
      title={tooltip}
      position='bottom'
      delay={300}
      hideDelay={1000}
      animation='perspective'
      arrowSize='small'
      stickyDuration={100}
      theme='dark'
      arrow
      inertia
      sticky
      touchHold
    >
      <span className='navbarLink inactive'> 
          {name}
      </span>
    </Tooltip>
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