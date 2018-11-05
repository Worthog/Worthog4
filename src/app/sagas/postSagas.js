import { put, call } from 'redux-saga/effects';
import { getAllPosts, addPost, updatePost, deletePost, addNewPost  } from '../../api/post-api';
import * as types from '../constants/PostActionTypes';

// Feb 23 - added newPostSaga calls API addNewPost

export function* getPostsSaga({ payload }) {
  alert("get all posts"); 
  try {  
    const Posts = yield call(getAllPosts, payload);
    yield [      
      put({ type: types.GET_POSTS_SUCCESS, Posts }),
    ];
  } catch (error) {
    yield put({ type: types.GET_POSTS_FAILURE , error });
  }
}


export function* addPostSaga({ text }) {
   try {  
    const Post = yield call(addPost, text );
    yield [      
      put({ type: types.ADD_POST_SUCCESS, Post }),
    ];
  } catch (error) {
    yield put({ type: 'ADD_POST_FAILURE', error });
  }
}



export function* editPostSaga({ Post }) {
   console.log("from editPostsage call API updatePost: ", Post) ;
   try {  
    const edPost = yield call(updatePost, Post );
    yield [      
      put({ type: types.EDIT_POST_SUCCESS, edPost }),
    ];
  } catch (error) {
    yield put({ type: 'EDIT_POST_FAILURE', error });
  }
}


export function* deletePostSaga({ Post }) {
   console.log("from deletePostsaga call API deletePost: ", Post) ;
   try {  
    const newPost = yield call(deletePost, Post );
    yield [      
      put({ type: types.DELETE_POST_SUCCESS, newPost }),
    ];
  } catch (error) {
    yield put({ type: 'DELETE_POST_FAILURE', error });
  }
}


export function* newPostSaga({ post }) {
   console.log("from newPostSaga call API addNewPost and pass: ", post) ;
   try {  
    const newpost = yield call( addNewPost, post );
    yield [      
      put({ type: types.NEW_POST_SUCCESS, newpost }),
    ];
  } catch (error) {
    yield put({ type: 'NEW_POST_FAILURE', error });
  }
}


export function* updatePostSaga({ id, post }) {
   console.log("from updatePostsaga call API updatePost: ", post) ;
   console.log("from updatePostsaga id = ", id ) ;
   try {  
    const edPost = yield call(updatePost, id, post );
    yield [      
      put({ type: types.UPDATE_POST_SUCCESS, edPost }),
    ];
  } catch (error) {
    yield put({ type: 'UPDATE_POST_FAILURE', error });
  }
}

