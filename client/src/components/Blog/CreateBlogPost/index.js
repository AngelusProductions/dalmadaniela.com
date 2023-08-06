import React, { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import HomeIcon from '../../UI/HomeIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'
import { BUCKET_URL } from '../../../constants/config'
import { uploadFileToStorage } from '../../../api/google'
import { createBlogPost } from '../../../api/blog'

import './index.scss'
import { useNavigate } from 'react-router'

const t = {
  title: 'Create a Blog Post',
  create: 'Create',
  intro: 'Intro',
  body: 'Body',
  conclusion: 'Conclusion',
  youtubeLink: 'Insert YouTube Link',
  remove: 'Remove',
  submit: 'Submit',
  validationError: 'Check yourself, dummy.',
  youtubeRegex: /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
}

const tipTapProps = {
  withToolbar: true,
  withTaskListExtension: true,
  withLinkExtension: true,
  withEmojisReplacer: true,
  withPopover: true,
  withTypographyExtension: true,
  withHexColorsDecorator: true,
  withMentionSuggestion: true,
  withEmojiSuggestion: true,
  withCodeBlockLowlightExtension: true,
  withPlaceholderExtension: true,
  spellcheck: true,
}

export const CreateBlogPost = props => {
  const navigate = useNavigate()

  const [blogPostName, setBlogPostName] = useState('')
  const [introEditor, setIntroEditor] = useState({})
  const [bodyEditor, setBodyEditor] = useState({})
  const [conclusionEditor, setConclusionEditor] = useState({})
  const [youtubeLink, setYoutubeLink] = useState(null)
  const [isYoutubeLinkSubmitted, setIsYoutubeLinkSubmitted] = useState(false)
  const [isValidationError, setIsValidationError] = useState(false)
  const [file, setFile] = useState(null);
  
  const onCreate = () => {
    if(!file || blogPostName.length === 0 
      || !(introEditor && bodyEditor && conclusionEditor))
      setIsValidationError(true)
    else if (introEditor.getHTML().length === 0 
    || bodyEditor.getHTML().length === 0 
    || conclusionEditor.getHTML().length === 0
    || !youtubeLink.match(t.youtubeRegex)) {
      setIsValidationError(true)
    } else {
      uploadFileToStorage(file)
      createBlogPost({
        name: blogPostName,
        introHtml: introEditor.getHTML(),
        youtubeLink,
        bodyHtml: bodyEditor.getHTML(),
        photoUrl: `${BUCKET_URL}/${file.data.name}`,
        conclusionHtml: conclusionEditor.getHTML(),
      })
      setIsValidationError(false)
      navigate(paths.blog.page)
    }
  }

  const handleFileChange = e =>
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    })

  const onIntroChange = editor => setIntroEditor(editor)
  const onBodyChange = editor => setBodyEditor(editor)
  const onConclusionChange = editor => setConclusionEditor(editor)

  return (
    <div id='createBlogPostContainer'>
      <HomeIcon />
      <div id='createBlogPostTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.document} />
      </div>

      <div id='blogPostNameContainer'>
        <h2>Name</h2>
        <input type='text' value={blogPostName} onChange={(e => setBlogPostName(e.target.value))} />
      </div>

      <div id='createBlogPostTipTapContainer'>
        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.intro}</h2>
          <TipTap
            onChange={onIntroChange}
            {...tipTapProps}
          />
        </div> 

        <h2 id='youtubeLinkTitle'>{t.youtubeLink}</h2> 
        {isYoutubeLinkSubmitted ? (
          <LiteYouTubeEmbed 
            id={getYouTubeID(youtubeLink)} 
          />
        ) : (
          <input type='text' onChange={e => setYoutubeLink(e.target.value)} />
        )}
        <button 
          id='youtubeLinkSubmitButton'
          className='clickable'
          onClick={() => {
            setIsYoutubeLinkSubmitted(!isYoutubeLinkSubmitted)
            if (isYoutubeLinkSubmitted)
              setYoutubeLink('')
          }}
        >
          {isYoutubeLinkSubmitted ? t.remove : t.submit}
        </button>

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.body}</h2>
          <TipTap
            onChange={onBodyChange}
            {...tipTapProps}
          />
        </div> 

        <input type='file' name='file' onChange={handleFileChange}/>

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.conclusion}</h2>
          <TipTap
            onChange={onConclusionChange}
            {...tipTapProps}
          />
        </div> 

        {isValidationError && (
          <span id='validationError'>
            {t.validationError}
          </span>
        )}
        <button 
          id='createBlogPostSubmitButton' 
          className='clickable'
          onClick={onCreate}
        >
          {t.create}
        </button>
      </div>
  </div>
)}

export default CreateBlogPost