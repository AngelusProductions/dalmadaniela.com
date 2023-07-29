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
    <div id='blogPostNavContainer'>
      <Link to={paths.home}>
        <img id='blogPostHomeIcon' className='clickable' src={i.icons.home} />
      </Link>      
      <Link to={paths.home}>
        <img id='blogPostBackIcon' className='clickable' src={i.icons.back} />
      </Link>
    </div>

    <div id='blogPageTitleContainer'>
      <h1>{t.title}</h1>
      <img src={i.icons.document} />
    </div>

      {/* <TipTap
          content={content}
          withToolbar
          withTaskListExtension
          withLinkExtension
          withEmojisReplacer
          withPopover
          withTypographyExtension
          withHexColorsDecorator
          withMentionSuggestion
          withEmojiSuggestion
          withCodeBlockLowlightExtension
          withPlaceholderExtension
          spellcheck
      /> */}
  </div>
)}

export default BlogPost