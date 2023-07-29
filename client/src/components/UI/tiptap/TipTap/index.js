import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Placeholder from '@tiptap/extension-placeholder'
import Youtube from '@tiptap/extension-youtube'
import { Node, mergeAttributes } from '@tiptap/core'


// Load all highlight.js supported languages
import { lowlight } from 'lowlight'

import { Toolbar } from '../Toolbar'
import { Popover } from '../Popover'
import { EmojiSuggestion, MentionSuggestion, EmojiReplacer, HexColorDecorator } from '../extensions'
import { formatHtml, markdownToHtml, htmlToMarkdown } from '../helpers'

import './index.scss'

function TipTap({
    content = '',
    editable = true,
    placeholder = "Type '/' for actions…",
    withToolbar = false,
    withPopover = false,
    withTypographyExtension = false,
    withLinkExtension = false,
    withCodeBlockLowlightExtension = false,
    withTaskListExtension = false,
    withPlaceholderExtension = false,
    withMentionSuggestion = false,
    withEmojiSuggestion = false,
    withEmojisReplacer = false,
    withHexColorsDecorator = false,
    // withYoutubeExtension = false
}) {

    const [editorHtmlContent, setEditorHtmlContent] = React.useState(content.trim())
    const [turndownMarkdownContent, setTurndownMarkdownContent] = React.useState('')
    const [markedHtmlContent, setMarkedHtmlContent] = React.useState('')
    
    const [youtubeWidth, setYoutubeWidth] = useState('')
    const [youtubeHeight, setYoutubeHeight] = useState('')

    const extensions = [
        StarterKit.configure({
            ...(withCodeBlockLowlightExtension && { codeBlock: false }),
        }),
      Youtube.configure({
        controls: false,
      }),
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

    if (withCodeBlockLowlightExtension) {
        extensions.push(
            CodeBlockLowlight.configure({
                lowlight,
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

        /*extensions.push(
            MentionSuggestion.configure({
                suggestion: {
                    char: '+',
                },
            }),
        )*/
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
        editorProps: {
            attributes: {
            spellcheck: 'true',
        },
        onUpdate: ({ editor }) => {
            setEditorHtmlContent(editor.getHTML())
        }
    },
    })

    React.useEffect(
        function convertHtmlToMarkdown() {
            setTurndownMarkdownContent(htmlToMarkdown(editorHtmlContent))
        },
        [editorHtmlContent],
    )

    React.useEffect(
        function convertMarkdownToHtml() {
            setMarkedHtmlContent(markdownToHtml(turndownMarkdownContent))
        },
        [turndownMarkdownContent],
    )

    if (!editor) {
        return null
    }

    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')

        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: Math.max(320, parseInt(youtubeWidth, 10)) || 640,
                height: Math.max(180, parseInt(youtubeHeight, 10)) || 480,
            })
        }
    }

    const onSubmitClick = e => {
        debugger
    }

    editor.options.onUpdate(e => {
        debugger
    })

    const Video = Node.create({
    name: 'video', // unique name for the Node
    group: 'block', // belongs to the 'block' group of extensions
    selectable: true, // so we can select the video
    draggable: true, // so we can drag the video
    atom: true, // is a single unit

    addAttributes() {
        return {
        "src": {
            default: null
        },
        }
    },

    parseHTML() {
        return [
        {
            tag: 'video',
        },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['video', mergeAttributes(HTMLAttributes)];
    },

    addNodeView() {
        return ({ editor, node }) => {
        const div = document.createElement('div');
        div.className = 'aspect-w-16 aspect-h-9' + (editor.isEditable ? ' cursor-pointer' : '');
        const iframe = document.createElement('iframe');
        if (editor.isEditable) {
            iframe.className = 'pointer-events-none';
        }
        iframe.width = '640';
        iframe.height = '360';
        iframe.frameborder = "0";
        iframe.allowfullscreen = "";
        iframe.src = node.attrs.src;
        if (editor.isEditable) {
            iframe.className = 'pointer-events-none';
        };
        div.append(iframe);

        return {
            dom: div,
        }
        }
    },
    });

    const setVideo= () => {
        editor.commands.insertContent(`
        <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>`)
        // const videoSrc = editor.getAttributes('video').src;
        // const video = window.prompt('Video URL', videoSrc)

        // // cancelled
        // if (video === null) {
        //     return;
        // }

        // // empty
        // if (video === '') {
        //     editor.isActive('video') ? editor.commands.deleteSelection() : false;
        //     return;
        // }

        // // update video
        // // validate url is from youtube or vimeo
        // if (!input.match(/youtube|vimeo/)) {
        //     return alert("Sorry, your video must be hosted on YouTube or Vimeo.");
        // }
        // let srcCheck = input.match(/src="(?<src>.+?)"/); // get the src value from embed code if all pasted in
        // let src = srcCheck ? srcCheck.groups.src : input; // use src or if just url in input use that
        // // check youtube url is correct
        // if (input.match(/youtube/) && !src.match(/^https:\/\/www\.youtube\.com\/embed\//)) {
        //     return alert("Sorry, your YouTube embed URL should start with https://www.youtube.com/embed/ to work.");
        // }
        // // check vimeo url is correct
        // if (input.match(/vimeo/) && !src.match(/^https:\/\/player\.vimeo\.com\/video\//)) {
        //     return alert("Sorry, your Vimeo embed URL should start with https://player.vimeo.com/video/ to work.");
        // }
        // if (video) {
        //     editor.commands.updateAttributes('video', { src: src }); // update the current video src
        // } else {
        //     editor.chain().focus().insertContent(`<video src="${src}"></video>`).run(); // add a new video element
        // }
    };


    return (
        <div>
            <button onClick={setVideo} className={editor.isActive('video') ? 'is-active' : ''}>Video</button>

            <button id="add" onClick={addYoutubeVideo}>Add YouTube video</button>
            <input id="width" type="number" min="320" max="1024" placeholder="width"
                onChange={(e) => setYoutubeWidth(e.target.value)} value={youtubeWidth}
            />
            <input id="height" type="number" min="180" max="720" placeholder="height"
                onChange={(e) => setYoutubeHeight(e.target.value)} value={youtubeHeight}
            />
            <button id="submit" onClick={onSubmitClick}>Submit</button>
            <div className="WhiteCard">
                {withToolbar ? <Toolbar editor={editor} /> : null}
                {withPopover ? <Popover editor={editor} /> : null}
                <EditorContent editor={editor} />
            </div>
            <h2>Text (tiptap)</h2>
            <div className="WhiteCard">
                <pre>{editor.getText()}</pre>
            </div>
            <h2>HTML Output</h2>
            <div className="WhiteCard">
                <pre>{formatHtml(editorHtmlContent)}</pre>
            </div>
            <h2>HTML Output (tiptap) ➡ Turndown (lib) ➡ Markdown</h2>
            <div className="WhiteCard">
                <pre>{turndownMarkdownContent}</pre>
            </div>
            <h2>Markdown ➡ Marked (lib) ➡ DOMPurify (lib) ➡ HTML</h2>
            <div className="WhiteCard">
                <pre>{formatHtml(markedHtmlContent)}</pre>
            </div>
        </div>
    )
}

export default TipTap
