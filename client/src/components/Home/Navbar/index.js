import React, { useState } from 'react'
import './styles/index.scss'

import NavbarLink from './NavbarLink'

import { i } from '../../../constants/assets'
import navbarLinks from '../../../constants/navbarLinks'

const Navbar = ({ burgerMenu = false }) => {
  const [hoveringLinkId, setHoveringLinkId] = useState(null)
  return (
    <nav id='navbar' className={burgerMenu ? 'burger' : 'normal'}>
      <div className='navbarSection leftSection'>
        {navbarLinks.filter(({ side }) => side === 'left')
          .map(link => (
            <NavbarLink 
              key={link.id}
              setHoveringLinkId={setHoveringLinkId}
              {...link} 
            />
          ))
        }
      </div>
      <div className='navbarSection rightSection'>
        {navbarLinks.filter(({ side }) => side === 'right')
          .map(link => (
            <NavbarLink 
              key={link.id}
              setHoveringLinkId={setHoveringLinkId}
              {...link} 
            />
          ))
        }
      </div>
      {hoveringLinkId && (
        <div id='navbarCloudContainer'>
          <span>{navbarLinks.find(({ id }) => id === hoveringLinkId ).tooltip}</span>
          <img src={i.magic.magicCloud} />
        </div>
      )}
    </nav>
  )
}

export default Navbar