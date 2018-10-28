import initialPosts from './initialposts';
import * as types from '../../app/constants/PostActionTypes';

// const initialState = {
//     posts: initialPosts,
//     loading: false  
//   };

let index = 0; 

export default function postReducer(state=initialPosts, action) {

  
  switch (action.type) {

    case types.GET_POSTS_SUCCESS:
        console.log("postreducer action = ", action);
        console.log("postreducer get_posts_success = ", action.Posts);
        return Object.assign({}, state, { posts: action.Posts });

    case types.ADD_POST_SUCCESS:
        return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            text: action.text,
            completed: false
          }
        ]
      })    


    // case types.DELETE_POST:
    //   return state.filter(post =>
    //     post.id !== action.id
    //   )

    case types.DELETE_POST_SUCCESS:
        index = state.posts.findIndex((post) => post._id === action.post._id);
        console.log("DELETE post index = ", index);        
        return Object.assign({}, state.posts, {
            posts: [
            ...state.posts.slice(0, index),
            Object.assign({}, state.posts[index], action.post._id ),
            ...state.posts.slice(index + 1)
        ]
        });

    case types.EDIT_POST_SUCCESS:
        index = state.posts.findIndex((post) => post._id === action.post._id);
        console.log("EDIT post index = ", index);        
        return Object.assign({}, state.posts, {
            posts: [
            ...state.posts.slice(0, index),
            Object.assign({}, state.posts[index], action.post._id ),
            ...state.posts.slice(index + 1)
        ]
        });
            

    default:
      return state
  }
}
