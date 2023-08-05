import React, { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import FileUpload from 'react-material-file-upload'
import axios from 'axios'

import HomeIcon from '../../UI/HomeIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { i } from '../../../constants/data/assets'

import './index.scss'

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
  const [introEditor, setIntroEditor] = useState({})
  const [bodyEditor, setBodyEditor] = useState({})
  const [conclusionEditor, setConclusionEditor] = useState({})
  const [youtubeLink, setYoutubeLink] = useState(null)
  const [isYoutubeLinkSubmitted, setIsYoutubeLinkSubmitted] = useState(false)
  const [isValidationError, setIsValidationError] = useState(false)
  const [files, setFiles] = useState([])
  const [file, setFile] = useState(null);

  
  const onCreate = () => {
    if(!(introEditor && bodyEditor && conclusionEditor))
      setIsValidationError(true)
    else if (introEditor.getHTML().length === 0 
    || bodyEditor.getHTML().length === 0 
    || conclusionEditor.getHTML().length === 0
    || !youtubeLink.match(t.youtubeRegex)) {
      setIsValidationError(true)
    } else {
      setIsValidationError(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data);
    debugger
    const response = await fetch("http://localhost:4000/upload-file-to-cloud-storage", {
      method: "POST",
      body: formData,
      mode: 'no-cors',
      
    }).catch(error => {
      debugger
    });
    // const response = await axios.post(
    //   "http://localhost:4000/upload-file-to-cloud-storage",
    //   formData,
    // ).catch(error => {
    //   debugger
    // });
    const responseWithBody = await response.json();
    if (response) setUrl(responseWithBody.publicUrl);
  };

  const onIntroChange = editor => setIntroEditor(editor)
  const onBodyChange = editor => setBodyEditor(editor)
  const onConclusionChange = editor => setConclusionEditor(editor)

  // useEffect(() => {
  //   const test = files
  //   debugger
  // }, [files])

    const handleFileChange = e => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
  };

  return (
    <div id="createBlogPostContainer">
      <HomeIcon />
      <div id='createBlogPostTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.document} />
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
          <input onChange={e => setYoutubeLink(e.target.value)} />
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

        {/* <FileUpload value={files} onChange={setFiles} /> */}
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button onClick={handleSubmit}>Upload</button>

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