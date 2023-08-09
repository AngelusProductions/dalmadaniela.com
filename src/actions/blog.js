import {
  GET_BLOG_POST_FAILURE,
  GET_BLOG_POST_REQUEST,
  GET_BLOG_POST_SUCCESS,
  GET_ALL_BLOG_POSTS_FAILURE,
  GET_ALL_BLOG_POSTS_REQUEST,
  GET_ALL_BLOG_POSTS_SUCCESS
} from '../constants'

export const getBlogPostRequest = { type: GET_BLOG_POST_REQUEST }
export const getAllBlogPostsRequest = { type: GET_ALL_BLOG_POSTS_REQUEST }

export const getBlogPostFailure = errors => ({
  type: GET_BLOG_POST_FAILURE,
  errors
})
export const getAllBlogPostsFailure = errors => ({
  type: GET_ALL_BLOG_POSTS_FAILURE,
  errors
})

export const getBlogPostSuccess = blogPost => ({
  type: GET_BLOG_POST_SUCCESS,
  blogPost
})
export const getAllBlogPostsSuccess = blogPosts => ({
  type: GET_ALL_BLOG_POSTS_SUCCESS,
  blogPosts
})