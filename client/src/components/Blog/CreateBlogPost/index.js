import React, { useState } from 'react'

import HomeIcon from '../../UI/HomeIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { i } from '../../../constants/data/assets'

import './index.scss'

const t = {
  title: 'Create a Blog Post',
  create: 'Create'
}

export const CreateBlogPost = props => {
  const [introEditor, setIntroEditor] = useState('')

  const onCreate = () => {
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
            onChange={editor => setIntroEditor(editor)}
        />
        <button 
          id='createBlogPostSubmitButton' 
          className='clickable'
        >
          {t.create}
        </button>
      </div>
  </div>
)}

export default CreateBlogPost