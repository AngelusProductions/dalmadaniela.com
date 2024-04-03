import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: {
    page: '/superclass',
    videos: '/superclass/videos',
    metaData: '/superclass/videos/data',
    watch: '/superclass/videos/:id',
    login: '/superclass/login'
  },
  magicCalendars: {
    page: '/magic-calendars',
    form: '/magic-calendars/form/:question',
    checkout: '/magic-calendars/form/checkout',
    success: '/magic-calendars/success',
  },
  blog: {
    page: '/blog',
    allBlogPosts: '/blog/posts',
    blogPost: '/blog/posts/:name',
    create: '/blog/create'
  },
  team: '/team',
  contactUs: '/contact-us',
  services: '/services',
  acting: '/acting',
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
  contact: '/contact',
  blogPosts: {
    getAll: '/blogposts',
    create: '/blogposts/create'
  },
  superClass: {
    login: '/superClass/login',
    progress: '/superClass/progress',
    complete: '/superClass/complete',
    saveInfo: '/superClass/saveInfo',
  },
  magicCalendars: {
    create: '/magic-calendars/create',
    saveGraphic: '/magic-calendars/saveGraphic',
    chatGPT: '/magic-calendars/chatGPT',
  },
  stripe: {
    createPaymentIntent: '/stripe/createPaymentIntent',
  }
}

export const ROOT_API_URL = configureApiRoot()
