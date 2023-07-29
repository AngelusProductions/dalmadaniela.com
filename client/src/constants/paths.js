import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: '/super-class',
  magicCalendars: '/magic-calendars',
  blog: {
    page: '/blog',
    allBlogPosts: '/blog/posts',
    blogPost: 'blog/posts/:id'
  },
  team: '/team',
  contactUs: '/contact',
  geniusMarketingServices: '/services',
}

export const apiEndpoints = {
  loginWithPassword: '/auth/password',
  loginWithJwt: '/auth/jwt',
  signup: '/signup',
  payment: '/stripe'
}

export const ROOT_API_URL = configureApiRoot()
