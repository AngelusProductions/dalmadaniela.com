import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { getAllBlogPosts } from '../../api/blog'
import { adminEmails } from '../../constants/data/admins'
import { getAllBlogPostsRequest, getAllBlogPostsFailure, getAllBlogPostsSuccess } from '../../actions/blog'

import './styles/index.scss'
import UserInfo from '../Auth/UserInfo'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = ({ currentUser, getAllBlogPosts, blogPosts }) => {
  const containerRef = useRef()
  useEffect(() => {
    containerRef.current.scrollIntoView(true)
    getAllBlogPosts()
  }, [])

  return (
    <div id="blogPageContainer" ref={containerRef}>
      <HomeIcon text pink />
      <UserInfo redirect={paths.blog.page} backgroundColor='yellow' />
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
        {/* <img src={i.icons.syringe} /> */}
      </div>

      <div id='blogPageHilightsContainer'>
        {blogPosts && blogPosts.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        }).map(({ id, name, photoUrl, slug }) => (
          <Link key={id} to={`${paths.blog.allBlogPosts}/${slug}`}>
            <div id={`blogPageBlogPost-${id}`} key={id} className='blogPageBlogPostContainer'>
              <h2>{name}</h2>
              <img src={photoUrl} />
            </div>
          </Link>
        ))}
      </div>
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