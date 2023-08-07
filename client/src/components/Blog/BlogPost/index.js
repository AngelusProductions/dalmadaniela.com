import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './index.scss'

const t = {
  title: 'Blog Title'
}

export const BlogPost = props => {

  return (
    <div id="blogPostContainer">
      <HomeIcon />
      <BackIcon path={paths.blog.page} yellow />

    <div id='blogPageTitleContainer'>
      <h1>{t.title}</h1>
      <img src={i.icons.document} />
    </div>
  </div>
)}

export default BlogPost