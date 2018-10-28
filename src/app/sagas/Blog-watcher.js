import { takeLatest } from 'redux-saga/effects';
import {newBlogSaga, getBlogsSaga, getBlogSaga, addBlogSaga, completeBlogSaga, editBlogSaga, deleteBlogSaga, updateBlogSaga } from './blogSagas';
import * as types from '../constants/BlogActionTypes';

export function* watchBlogs() {
  yield* takeLatest(types.GET_BLOGS_REQUEST, getBlogsSaga);  
}

export function* watchAddBlog() {  
  yield* takeLatest(types.ADD_BLOG_REQUEST, addBlogSaga);
}

export function* watchCompleteBlog() {
  yield* takeLatest(types.COMPLETE_BLOG_REQUEST, completeBlogSaga );
}

export function* watchEditBlog() {
  yield* takeLatest(types.EDIT_BLOG_REQUEST, editBlogSaga );
}

export function* watchDeleteBlog() {
  yield* takeLatest(types.DELETE_BLOG_REQUEST, deleteBlogSaga );
}


export function* watchNewBlog() {
  yield* takeLatest(types.NEW_BLOG_REQUEST, newBlogSaga);  
  console.log("blog-watcher call newBlogsSaga")
}

export function* watchBlog() {
  yield* takeLatest(types.GET_BLOG_REQUEST, getBlogSaga);  
}

export function* watchBlogUpdate() {
  yield* takeLatest(types.UPDATE_BLOG_REQUEST, updateBlogSaga);  
}
