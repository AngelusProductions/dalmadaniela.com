import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'
import { BUCKET_URL } from '../../../constants/config'
import { uploadFileToStorage } from '../../../api/google'
import { createBlogPost } from '../../../api/blog'

import './index.scss'

const t = {
  title: 'Create a Blog Post',
  create: 'Create',
  intro: 'Intro',
  introPlaceholder: "Type intro here...",
  body: 'Body',
  bodyPlaceholder: "Type body here...",
  conclusion: 'Conclusion',
  conclusionPlaceholder: "Type conlusion here...",
  youtubeLink: 'Insert YouTube Link',
  preview: 'Preview',
  remove: 'Remove',
  validationError: 'Check yourself, dummy.',
  youtubeRegex: /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
}

export const CreateBlogPost = ({ currentUser }) => {
  const navigate = useNavigate()

  const [blogPostName, setBlogPostName] = useState('')
  const [introEditor, setIntroEditor] = useState({})
  const [bodyEditor, setBodyEditor] = useState({})
  const [conclusionEditor, setConclusionEditor] = useState({})
  const [youtubeLink, setYoutubeLink] = useState(null)
  const [isYoutubeLinkSubmitted, setIsYoutubeLinkSubmitted] = useState(false)
  const [isValidationError, setIsValidationError] = useState(false)
  const [file, setFile] = useState(null);
  
  useEffect(() => {
    if(!currentUser.email) {
      navigate(`${paths.auth.login}?redirect=${paths.blog.create}`)
    }
  })
  
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
      <BackIcon path={paths.blog.page} />
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
          <TipTap onChange={onIntroChange} placeholder={t.introPlaceholder} />
        </div> 

        <input type='file' name='file' onChange={handleFileChange}/>

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.body}</h2>
          <TipTap onChange={onBodyChange} placeholder={t.bodyPlaceholder} />
        </div> 

        <h2 id='youtubeLinkTitle'>{t.youtubeLink}</h2> 
        {isYoutubeLinkSubmitted ? (
          <LiteYouTubeEmbed id={getYouTubeID(youtubeLink)} />
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
          {isYoutubeLinkSubmitted ? t.remove : t.preview}
        </button>

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.conclusion}</h2>
          <TipTap onChange={onConclusionChange} placeholder={t.conclusionPlaceholder} />
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

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(CreateBlogPost)