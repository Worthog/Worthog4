import * as types from '../../app/constants/BlogActionTypes';


export function addNewBlog(blog) {
  return { type: types.NEW_BLOG_REQUEST,  blog };
}

export function updateBlog(id, blog) {
  return { type: types.UPDATE_BLOG_REQUEST, id,  blog };
}

export function addBlogAction(text) {
  return { type: types.ADD_BLOG_REQUEST, text }
}


export function deleteBlog(id) {
  return { type: types.DELETE_BLOG, id }
}

export function editBlog(id, text) {
  return { type: types.EDIT_BLOG, id, text }
}


export function deleteBlogSuccess(Blogid) {
  return {
    type: types.DELETE_BLOG_SUCCESS,
    Blogid
  };
}

export function getBlogsAction(Blogs) {
  return {
    type: types.GET_BLOGS_REQUEST,
    Blogs
  };
}

export function getBlogsSuccess(Blogs) {
  return {
    type: types.GET_BLOGS_SUCCESS,
    Blogs
  };
}


export function fetchBlog( id ) {
  return {
    type: types.GET_BLOG_REQUEST,
    id
  };
}