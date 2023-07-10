import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({ path, text }) => {
  const formatUrl = url => {
    return url[0] === '/' ? url : '/' + url
  }

  const generateLinkText = url => {
    url = url.replace(/-/g, ' ')
    return url[0] === '/' ? url.slice(1) : url
  }

  return (
    <li>
      <Link to={formatUrl(path)}>
        {text || generateLinkText(path)}
      </Link>
    </li>
  )
}

export default NavbarLink