import {
  GET_ALL_BLOG_POSTS_FAILURE,
  GET_ALL_BLOG_POSTS_REQUEST,
  GET_ALL_BLOG_POSTS_SUCCESS
} from '../constants'

export const getAllBlogPostsRequest = { type: GET_ALL_BLOG_POSTS_REQUEST }

export const getAllBlogPostsFailure = errors => ({
  type: GET_ALL_BLOG_POSTS_FAILURE,
  errors
})

export const getAllBlogPostsSuccess = blogPosts => ({
  type: GET_ALL_BLOG_POSTS_SUCCESS,
  blogPosts
})