import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const createBlogPost = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.blogPosts.create}`,
    payload
  )
  return res.data
}

export const getBlogPost = async name => {
  const res = await axios.get(`${ROOT_API_URL}${apiEndpoints.blogPosts.getAll}/${encodeURI(name)}`)
  return res.data
}

export const getAllBlogPosts = async () => {
  const res = await axios.get(`${ROOT_API_URL}${apiEndpoints.blogPosts.getAll}`)
  return res.data
}