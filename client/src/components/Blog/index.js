import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { getAllBlogPosts } from '../../api/blog'
import { adminEmails } from '../../constants/data/admins'
import { getAllBlogPostsRequest, getAllBlogPostsFailure, getAllBlogPostsSuccess } from '../../actions/blog'

import './index.scss'
import UserInfo from '../Auth/UserInfo'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = ({ currentUser, getAllBlogPosts, blogPosts }) => {

  useEffect(() => {
    if(blogPosts.length === 0)
      getAllBlogPosts()
  }, [])

  return (
    <div id="blogPageContainer">
      <HomeIcon />
      <UserInfo backgroundColor='pink' />
      {adminEmails.includes(currentUser?.email) && (
        <Link to={paths.blog.create}>
          <img 
            id='blogPageCreateBlogIcon' 
            src={i.icons.add} 
            className='clickable'
          />
        </Link>
      )}

      <div id='blogPageTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.syringe} />
      </div>

      <div id='blogPageHilightsContainer'>
        {blogPosts.map(({ id, name, introHtml, photoUrl }) => (
          <div id={`blogPageBlogPost-${id}`} key={id} className='blogPageBlogPostContainer clickable'>
            <h2>{name}</h2>
            <img src={photoUrl} />
          </div>
        ))}
      </div>

      {blogPosts.length  > 0 && (
        <Link id='blogPageAllBlogPostsLink' to={paths.blog.allBlogPosts} className='clickable'>
          <span>{t.morePosts}</span>
        </Link>
      )}
    </div>
)}

const mapState = state => {
  return {
    currentUser: state.currentUser,
    blogPosts: state.blog.blogPosts
  }
}

const mapDispatch = dispatch => ({
  getAllBlogPosts: async () => {
    dispatch(getAllBlogPostsRequest)
    try {
      const { blogPosts} = await getAllBlogPosts()

      dispatch(getAllBlogPostsSuccess(blogPosts))
      return blogPosts
    } catch (e) {
      dispatch(getAllBlogPostsFailure({ errors: [e] }))
      console.warn(e)
    }
  }
})

export default connect(mapState, mapDispatch)(Blog)