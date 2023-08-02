import React, { useState } from 'react'

import HomeIcon from '../../UI/HomeIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { i } from '../../../constants/data/assets'

import './index.scss'

const t = {
  title: 'Create a Blog Post'
}

export const CreateBlogPost = props => {
  const [content, setContent] = useState('')

  const onSubmit = content => {
    debugger
  }

  return (
    <div id="createBlogPostContainer">
      <HomeIcon />
      <div id='createBlogPostTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.document} />
      </div>

      <div id='createBlogPostTipTapContainer'>
        <TipTap
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
            onSubmit={onSubmit}
        />
      </div>
  </div>
)}

export default CreateBlogPost