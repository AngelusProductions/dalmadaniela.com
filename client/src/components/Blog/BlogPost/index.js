import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import parse from 'html-react-parser'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import { paths } from '../../../constants/paths'

import { getBlogPost } from '../../../api/blog'
import { getBlogPostRequest, getBlogPostFailure, getBlogPostSuccess } from '../../../actions/blog'

import './index.scss'

export const BlogPost = ({ blogPost, getBlogPost }) => {
  const { id } = useParams()

  useEffect(() => {
    getBlogPost(id)
  }, [])

  return (
    <div id="blogPostPageContainer">
      <HomeIcon />
      <BackIcon path={paths.blog.page} pink />

      {blogPost && (
        <div id='blogPageTitleContainer'>
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
        </div>
      )}
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