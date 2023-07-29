import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Layout } from '@shopify/polaris'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'

import './index.scss'
import AuthLayout from '../Auth/AuthLayout'

const t = {
  title: 'Your Dose of Marketing Wisdom',
  morePosts: 'More blogposts...'
}

export const Blog = ({ loggedIn, email }) => {

  return (
    <div id="blogPageContainer">
      <Link to={paths.home}>
        <img 
          id='blogPageHomeIcon' 
          className='clickable' 
          src={i.icons.home}
        />
      </Link>
      {loggedIn && email ? (
        <Layout.Section>
          <Card sectioned>Logged in as: {email}</Card>
        </Layout.Section>
        ) : (
          <Layout.Section>
            <Card sectioned>
              <Link to={paths.auth.signup}>
                Sign up to get started.
              </Link>
            </Card>
          </Layout.Section>
        )
      }
      <div id='blogPageTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.syringe} />
      </div>
      <div id='blogPageHilightsContainer'>
        
      </div>
    </div>
)}

const mapState = state => ({
  loggedIn: state.currentUser.loggedIn,
  email: state.currentUser.email
})

export default connect(mapState)(Blog)