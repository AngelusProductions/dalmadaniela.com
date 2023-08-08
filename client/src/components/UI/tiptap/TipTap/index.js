import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Placeholder from '@tiptap/extension-placeholder'

import { Toolbar } from '../Toolbar'
import { Popover } from '../Popover'
import { EmojiSuggestion, MentionSuggestion, EmojiReplacer, HexColorDecorator } from '../extensions'

import './index.scss'

function TipTap({
    content = '',
    editable = true,
    placeholder = "What's on your mind, Dalma?",
    withToolbar = true,
    withPopover = true,
    withTypographyExtension = true,
    withLinkExtension = true,
    withTaskListExtension = true,
    withPlaceholderExtension = true,
    withMentionSuggestion = true,
    withEmojiSuggestion = true,
    withEmojisReplacer = true,
    withHexColorsDecorator = true,
    withSpellCheck = true,
    onChange
}) {
    const extensions = [
        StarterKit
    ]

    if (withTypographyExtension) {
        extensions.push(Typography)
    }

    if (withLinkExtension) {
        extensions.push(
            Link.configure({
                linkOnPaste: false,
                openOnClick: false,
            }),
        )
    }

    if (withTaskListExtension) {
        extensions.push(TaskList, TaskItem)
    }

    if (withPlaceholderExtension) {
        extensions.push(
            Placeholder.configure({
                placeholder,
            }),
        )
    }

    if (withMentionSuggestion) {
        extensions.push(MentionSuggestion)
    }

    if (withEmojiSuggestion) {
        extensions.push(EmojiSuggestion)
    }

    if (withEmojisReplacer) {
        extensions.push(EmojiReplacer)
    }

    if (withHexColorsDecorator) {
        extensions.push(HexColorDecorator)
    }

    const editor = useEditor({
        content,
        extensions,
        editable,
        onUpdate: ({ editor }) => {
            onChange(editor)
        },
        editorProps: {
            attributes: {
                spellcheck: withSpellCheck.toString(),
            },
        },
    })

    if (!editor) {
        return null
    }

    return (
        <div className="WhiteCard">
            {withToolbar ? <Toolbar editor={editor} /> : null}
            {withPopover ? <Popover editor={editor} /> : null}
            <EditorContent editor={editor} />
        </div>
    )
}

export default TipTap
