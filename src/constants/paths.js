import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: '/superclass',
  magicCalendars: {
    page: '/magic-calendars',
    checkout: '/magic-calendars/checkout',
  },
  blog: {
    page: '/blog',
    allBlogPosts: '/blog/posts',
    blogPost: '/blog/posts/:name',
    create: '/blog/create'
  },
  team: '/team',
  contactUs: '/contact',
  geniusMarketingServices: '/services',
  auth: {
    login: '/auth/login',
    signup: '/auth/signup'
  }
}

export const apiEndpoints = {
  loginWithPassword: '/auth/password',
  loginWithJwt: '/auth/jwt',
  signup: '/signup',
  payment: '/stripe',
  upload: '/upload',
  blogPosts: {
    getAll: '/blogposts',
    create: '/blogposts/create'
  },
  superClass: {
    checkIP: '/superClass/checkIP',
    saveInfo: '/superClass/saveInfo',
  },
  magicCalendars: {
    checkout: '/magic-calendars/checkout'
  }
}

export const ROOT_API_URL = configureApiRoot()
