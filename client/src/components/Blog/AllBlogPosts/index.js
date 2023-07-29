import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './index.scss'

const t = {
  title: 'All Posts'
}

export const AllBlogPosts = props => {

  return (
    <div id="allBlogPostsContainer">
    <div id='allBlogPostsNavContainer'>
      <Link to={paths.home}>
        <img id='allBlogPostsHomeIcon' className='clickable' src={i.icons.home} />
      </Link>      
      <Link to={paths.home}>
        <img id='allBlogPostsBackIcon' className='clickable' src={i.icons.back} />
      </Link>
    </div>

    <div id='allBlogPostsTitleContainer'>
      <h1>{t.title}</h1>
      <img src={i.icons.document} />
    </div>

    <div id='allBlogPostsList'>

    </div>
  </div>
)}

export default AllBlogPosts