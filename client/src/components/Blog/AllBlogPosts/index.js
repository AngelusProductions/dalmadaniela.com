import React from 'react'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './index.scss'
import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

const t = {
  title: 'All Posts'
}

export const AllBlogPosts = props => {

  return (
  <div id="allBlogPostsContainer">
    <HomeIcon />
    <BackIcon path={paths.blog.page} pink />

    <div id='allBlogPostsTitleContainer'>
      <h1>{t.title}</h1>
      <img src={i.icons.document} />
    </div>

    <div id='allBlogPostsList'>
      
    </div>
  </div>
)}

export default AllBlogPosts