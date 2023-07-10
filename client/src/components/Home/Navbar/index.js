import React, { useState } from 'react'
import './index.scss'

import NavbarLink from './NavbarLink'

import navbarLinks from '../../../constants/navbarLinks'

const Navbar = ()=> (
  <nav id='navbar'>
    <div id='navbarLeft'>
    {navbarLinks.filter(({ side }) => side === 'left')
      .map(link => <NavbarLink {...link} key={link.id} />)}
    </div>
    <div id='navbarRight'>
    {navbarLinks.filter(({ side }) => side === 'right')
      .map(link => <NavbarLink {...link} key={link.id} />)}
    </div>
  </nav>
)

export default Navbar