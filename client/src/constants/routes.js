import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: '/super-class',
  magicCalendars: '/magic-calendars',
  blog: '/blog',
  meetTheTeam: '/team',
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
