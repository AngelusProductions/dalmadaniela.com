import React from 'react'
import './styles/index.scss'

import NavbarLink from './NavbarLink'

import navbarLinks from '../../../constants/data/navbarLinks'

const Navbar = ({ burgerMenu = false }) => {
  return (
    <nav id='navbar' className={burgerMenu ? 'burger' : 'normal'}>
      <div className='navbarSection leftSection'>
        {navbarLinks.filter(({ side }) => side === 'left')
          .map(link => (
            <NavbarLink 
              key={link.id}
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
              {...link} 
            />
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar