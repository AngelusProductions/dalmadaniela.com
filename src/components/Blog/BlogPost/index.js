import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import { paths } from '../../../constants/paths'
import { getBlogPost } from '../../../api/blog'
import { HOST_URL } from '../../../constants/config'
import { i } from '../../../constants/data/assets'
import { getBlogPostRequest, getBlogPostFailure, getBlogPostSuccess } from '../../../actions/blog'

import './styles/index.scss'

const t = {
  homeLink: 'Go back home',
  morePosts: 'Read more posts'
}

export const BlogPost = ({ blogPost, getBlogPost }) => {
  const { name } = useParams()
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const currentUrl = `${HOST_URL}${window.location.pathname}`

  useEffect(() => {
    getBlogPost(name.replace(/_/g,' '))
  }, [])

  const onCopyClick = async () => {
    await navigator.clipboard.writeText(currentUrl);
    setIsLinkCopied(true)
  }

  return (
    <div id='blogPostPageContainer'>
      <BackIcon text pink path={paths.blog.page} />
      {blogPost && (
        <div id='blogPostContainer'>
          <h1 id='blogPostName'>{blogPost.name}</h1>

          <div id='introContainer'>
            {parse(blogPost.introHtml)}
          </div>
          
          <img id='blogPostPhoto' src={blogPost.photoUrl}  />
          
          <div id='bodyContainer'>
            {parse(blogPost.bodyHtml)}
          </div>
            
          <div id='youtubeEmbedContainer'>
            <LiteYouTubeEmbed id={getYouTubeID(blogPost.youtubeLink)} />
          </div>

          <div id='conclusionContainer'>
            {parse(blogPost.conclusionHtml)}
          </div>

          <div id='blogPostShareIconsContainer'>
            <FacebookShareButton url={currentUrl} className='clickable'>
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <WhatsappShareButton url={currentUrl} className='clickable'>
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={currentUrl} className='clickable'>
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>
            <EmailShareButton url={currentUrl} className='clickable'>
              <EmailIcon size={50} round />
            </EmailShareButton>
            {isLinkCopied ? (
              <img id='blogPostCheckIcon' src={i.icons.check} className='clickable' onClick={onCopyClick} />
            ) : (
              <img id='blogPostCopyIcon' src={i.icons.copy} className='clickable' onClick={onCopyClick} />
            )}
          </div>
        </div>
      )}

      <div id='blogPostNavContainer'>
        <Link to={paths.home} className='clickable'>{t.homeLink}</Link>
        <Link to={paths.blog.allBlogPosts} className='clickable'>{t.morePosts}</Link>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    blogPost: state.blog.blogPost
  }
}

const mapDispatch = dispatch => ({
  getBlogPost: async id => {
    dispatch(getBlogPostRequest)
    try {
      const { blogPost } = await getBlogPost(id)

      dispatch(getBlogPostSuccess(blogPost))
      
      return blogPost
    } catch (e) {
      dispatch(getBlogPostFailure({ errors: [e] }))
      console.warn(e)
    }
  }
})

export default connect(mapState, mapDispatch)(BlogPost)