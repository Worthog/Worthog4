import * as types from '../../app/constants/PostActionTypes';


export function addNewPost(post) {
  return { type: types.NEW_POST_REQUEST, post };
}


export function updatePost(id, post) {
  return { type: types.UPDATE_POST_REQUEST, id,  post };
}


export function addPostAction(text) {
  return { type: types.ADD_POST_REQUEST, text }
}

export function deletePost(Post) {
  return { type: types.DELETE_POST_REQUEST, Post }
}

export function editPost(Post) {
  console.log ("from Post-actions editPost Post = ", Post) ;
  return { type: types.EDIT_POST_REQUEST, Post }
  
}


export function getPostsSuccess(Posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    Posts
  };
}

export function deletePostSuccess(PostId) {
  return {
    type: types.DELETE_POST_SUCCESS,
    PostId
  };
}

export function getPosts() {
  return {
    type: types.GET_POSTS_REQUEST    
  };
}

