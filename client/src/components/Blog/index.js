import React from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'

import './index.scss'
import UserInfo from '../Auth/UserInfo'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = () => {
  return (
    <div id="blogPageContainer">
      <HomeIcon />
      <UserInfo backgroundColor='pink' />
      <div id='blogPageTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.syringe} />
      </div>
      <div id='blogPageHilightsContainer'>
        
      </div>
    </div>
)}

export default Blog