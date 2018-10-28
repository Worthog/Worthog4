// import initialState from './initialState';
import * as types from '../../app/constants/BlogActionTypes' ;
import {objectToArray} from '../../app/common/util/helpers' ; 

// blogs are coming through as a key:value pair, need to convert the 
// blogs object to an array, use the helpers function objecttoArray
// not sure if this this is the best place to fix the data. 

// think  we need to change the blog reducer init call 
// export default function blogReducer(state={blogs:[]}, action) {

var index = 0; 

const initialState = {
  blogs: [],
  loading: false  
};

export default function blogReducer(state=initialState, action) {

  
  switch (action.type) {

    case types.GET_BLOGS_REQUEST: 
      return Object.assign( state, { loading: true } );
 

    case types.GET_BLOGS_SUCCESS:
        console.log("from blog-reducer get_blogs_success changed to blogArrray"); 
        

        let arr = Object.entries(action.blogs).map(entry => Object.assign({value: entry[1]}, { key: entry[0] }));
        console.log("Blog reducer : arr = ", arr ) ;

        let blogArray = [];
        blogArray = objectToArray(action.blogs); 
        
        console.log("blogArray = ", blogArray) ;

        // return Object.assign({}, state, arr );

        // return Object.assign({}, state, blogArray );

        // return Object.assign({}, state, action.blogArray );
        
        //  OLD VERSION -->  return blogArray ;
        return Object.assign ( {}, state, {
          blogs: blogArray,
          loading: false
          }) 
        

    case types.ADD_BLOG_SUCCESS:
        return Object.assign({}, state, {
        blogs: [
          ...state.blogs,
          {
            text: action.text,
          }
        ]
      })    

    case types.NEW_BLOG_SUCCESS:
      console.log("NEW_BLOG_SUCCESS Reducer ??? ");
      return Object.assign({}, state, {
      blogs: [
        ...state.blogs,
        {
          text: action.text,
        }
      ]
    })    
    case types.DELETE_BLOG:
      return state.filter(blog =>
        blog.id !== action.id
      )

    case types.DELETE_BLOG_SUCCESS:
        index = state.blogs.findIndex((blog) => blog._id === action.blog._id);
        console.log("DELETE blog index = ", index);        
        return Object.assign({}, state.blogs, {
            blogs: [
            ...state.blogs.slice(0, index),
            Object.assign({}, state.blogs[index], action.blog._id ),
            ...state.blogs.slice(index + 1)
        ]
        });

    case types.UPDATE_BLOG_SUCCESS:
        index = state.blog.findIndex((blog) => blog.id === action.blog.id);
        console.log("UPDATE blog index = ", index);        
        return Object.assign({}, state.blog, {
            blogs: [
            ...state.blog.blogs.slice(0, index),
            Object.assign({}, state.blog.blogs[index], action.blog._id ),
            ...state.blog.blogs.slice(index + 1)
        ]
        });
            

    case types.COMPLETE_BLOG_SUCCESS:
        console.log("from blog reducer state = ", state) ;
        console.log("from blog reducer action = ", action ) ;
        console.log("from reducer action.blog._id = ", action.blog._id ) ;
        
        index = state.blogs.findIndex((blog) => blog._id === action.blog._id);
        console.log("the blog index is = ", index); 
       
        return Object.assign({}, state.blogs, {
            blogs: [
            ...state.blogs.slice(0, index),
            Object.assign({}, state.blogs[index], action.blog._id ),
            ...state.blogs.slice(index + 1)
        ]
        });
               
   

    default:
      return state
  }
}
