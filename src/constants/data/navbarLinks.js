import { paths } from '../../constants/paths'

export default [
  {
    id: 1,
    name: 'Home',
    path: paths.home,
    side: 'left',
    tooltip: null
  },
  {
    id: 2,
    name: 'SuperClass',
    path: paths.superClass,
    side: 'left',
    tooltip: null
  },
  {
    id: 3,
    name: 'Magic calendars',
    path: paths.magicCalendars.page,
    side: 'left',
    tooltip: null
  },
  {
    id: 4,
    name: 'Blog',
    path: paths.blog.page,
    side: 'left',
    tooltip: null
  },
  {
    id: 5,
    name: 'Meet the Team',
    path: paths.team,
    side: 'right',
    tooltip: null
  },
  {
    id: 6,
    name: 'Contact us',
    path: paths.contactUs,
    side: 'right',
    tooltip: 'Yay!\nLet\'s chat soon. I\'d love to hear from you.'
  },
  {
    id: 7,
    name: 'Angelus web services',
    path: paths.geniusMarketingServices,
    side: 'right',
    tooltip: 'Shh... Genius secrets await you. Stay tuned.'
  }
]