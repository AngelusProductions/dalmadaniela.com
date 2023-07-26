import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import TipTap from '../UI/tiptap/TipTap'
import {
    BASIC_CONTENT,
    MARKDOWN_SHORTCUTS_CONTENT,
    POPOVER_EDITOR_CONTENT,
    SYNTAX_HIGHLGHTING_CONTENT,
    LONG_DOCUMENT_PERFORMANCE_CONTENT,
    READ_ONLY_MODE_CONTENT,
    READ_ONLY_MODE_V2_CONTENT,
} from '../UI/tiptap/data'
import './index.scss'

export const Blog = props => (
  <div id="Wrapper">
    <TipTap
        content={BASIC_CONTENT}
        withToolbar={true}
        withTaskListExtension={true}
        withLinkExtension={true}
        withEmojisReplacer={true}
    />
    <TipTap
        content={POPOVER_EDITOR_CONTENT}
        withPopover={true}
        withLinkExtension={true}
    />
    <TipTap
        content={MARKDOWN_SHORTCUTS_CONTENT}
        withTypographyExtension={true}
        withEmojisReplacer={true}
        withHexColorsDecorator={true}
    />
    <TipTap
        //content={SUGGESTIONS_EDITOR_CONTENT}
        withMentionSuggestion={true}
        withEmojiSuggestion={true}
    />
    <TipTap
        content={SYNTAX_HIGHLGHTING_CONTENT}
        withCodeBlockLowlightExtension={true}
    />
    <TipTap withPlaceholderExtension={true} withEmojisReplacer={true} />
    <TipTap content={LONG_DOCUMENT_PERFORMANCE_CONTENT} withToolbar={true} />
    {[...Array(20)].map((_, key) => (
        <TipTap
            key={key}
            content={READ_ONLY_MODE_CONTENT}
            editable={false}
            withTaskListExtension={true}
            withLinkExtension={true}
            withEmojisReplacer={true}
            withTypographyExtension={true}
            withHexColorsDecorator={true}
            withMentionSuggestion={true}
            withEmojiSuggestion={true}
            withCodeBlockLowlightExtension={true}
        />
    ))}
    {[...Array(300)].map((_, key) => (
        <TipTap
            key={key}
            content={READ_ONLY_MODE_V2_CONTENT}
            editable={false}
            withTaskListExtension={true}
            withLinkExtension={true}
            withEmojisReplacer={true}
            withTypographyExtension={true}
            withHexColorsDecorator={true}
            withMentionSuggestion={true}
            withEmojiSuggestion={true}
            withCodeBlockLowlightExtension={true}
        />
    ))}
  </div>
)

export default Blog