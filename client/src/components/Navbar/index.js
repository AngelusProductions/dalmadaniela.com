import React from 'react'
import NavbarLink from './NavbarLink'
import './index.scss'

const Navbar = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map(link => <NavbarLink {...link} key={link.path} />)}
      </ul>
    </nav>
  )
}

export default Navbar