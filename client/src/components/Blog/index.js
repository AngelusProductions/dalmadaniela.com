import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'

import './index.scss'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = props => {

  return (
    <div id="blogPageContainer">
      <Link to={paths.home}>
        <img 
          id='blogPageHomeIcon' 
          className='clickable' 
          src={i.icons.home}
        />
      </Link>      
      <div id='blogPageTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.syringe} />
      </div>
      <div id='blogPageHilightsContainer'>
        
      </div>
    </div>
)}

export default Blog