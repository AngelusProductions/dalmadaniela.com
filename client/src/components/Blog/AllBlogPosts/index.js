import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import './index.scss'

const t = {
  title: 'All Posts'
}

export const AllBlogPosts = ({ blogPosts }) => {

  useEffect(() => {
    if(blogPosts.length === 0)
      getAllBlogPosts()
  }, [])

  return (
  <div id="allBlogPostsPageContainer">
    <HomeIcon />
    <BackIcon path={paths.blog.page} pink />

    <div id='allBlogPostsPageTitleContainer'>
      <h1>{t.title}</h1>
      <img src={i.icons.documents} />
    </div>

    <div id='allBlogPostsPageBlogPostsList'>
      {blogPosts.map(({ id, name, photoUrl }) => (
          <Link to={`${paths.blog.allBlogPosts}/${id}`}>
            <div id={`allBlogPostsPageBlogPost-${id}`} key={id} className='allBlogPostsPageBlogPostContainer clickable'>
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

export default connect(mapState, mapDispatch)(AllBlogPosts)