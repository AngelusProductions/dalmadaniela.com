import React, { useState } from 'react'

import TipTap from '../UI/tiptap/TipTap'
import {
    BASIC_CONTENT
} from '../UI/tiptap/data'
import './index.scss'

export const Blog = props => {
  const [content, setContent] = useState(BASIC_CONTENT)

  return (
  <div id="Wrapper">
    <TipTap
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
    />
  </div>
)}

export default Blog