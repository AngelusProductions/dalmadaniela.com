import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { adminEmails } from '../../constants/data/admins'

import './index.scss'
import UserInfo from '../Auth/UserInfo'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = ({ currentUser }) => {
  return (
    <div id="blogPageContainer">
      <HomeIcon />
      <UserInfo backgroundColor='pink' />
      {adminEmails.includes(currentUser.email) && (
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
        
      </div>
    </div>
)}

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapState)(Blog)