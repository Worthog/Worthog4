import { put, call } from 'redux-saga/effects';
import { getAllBlogs, addBlog, updateBlog, deleteBlog, getBlog, addNewBlog } from '../../api/blog-api';
import * as types from '../constants/BlogActionTypes';

// this format may be wrong, should be put({ type: types.ACTION_TYPE, parameter })
// Jan 10 - see getBlogsSaga  
// See the REDUX-SAGA demo, order saga incorporated changes
// here is the old version (was working)
//  const blogs = yield call(getAllBlogs, payload);
//  yield put({ type: 'GET_BLOGS_SUCCESS', blogs }) ;

export function* getBlogsSaga({ payload }) {
  console.log("from getBlogsSaga call API getAllBlogs") ;
  try {  
   
  /*  const response = yield call(getAllBlogs, payload);
   const blogs = [];
   for (let key in response.data) {
       blogs.push({
       ...response.data[key],
       id: key
     });
   } */

   const blogs = yield call(getAllBlogs, payload);
   // const response = yield call(getAllBlogs, payload);
   // before sending the data to the reducer convert it to an array
  //  console.log( {response}) ;

  //   object.keys(response.data).map(function(key, index) {
  //   console.log(response.data[key])
  //   });


  //  const blogArray = [];
  //  for (let key in response.data) {
  //   blogArray.push({
  //   ...response.data[key],
  //   id: key
  //   });
  // }
  // console.log( {blogArray}) ;
    yield put({ type: types.GET_BLOGS_SUCCESS, blogs });
    
   // yield put({ type: types.GET_BLOGS_SUCCESS, blogArray });
  
  } catch (error) {
    yield put({ type: types.GET_BLOGS_FAILURE , error });
  }
}


export function* addBlogSaga({ text }) {
   try {  
    const blog = yield call(addBlog, text );
    yield [      
      put({ type: types.ADD_BLOG_SUCCESS, blog }),
    ];
  } catch (error) {
    yield put({ type: types.ADD_BLOG_FAILURE, error });
  }
}



export function* editBlogSaga({ Blog }) {
   console.log("from editBlogsage call API updateBlog: ", Blog) ;
   try {  
    const edBlog = yield call(updateBlog, Blog );
    yield [      
      put({ type: types.EDIT_BLOG_SUCCESS, Blog }),
    ];
  } catch (error) {
    yield put({ type: types.EDIT_BLOG_FAILURE, error });
  }
}

export function* completeBlogSaga({ Blog }) {
  
  // change the complete status 
  Blog.completed = !Blog.completed; 
  
  // call the API passing the new parameters 
  console.log("from completeBlogsaga call API updateBlog: ", Blog) ;
  
 // remove try hiding errors 
  try {  
    const newBlog = yield call(updateBlog, Blog );
    yield [      
      put({ type: types.COMPLETE_BLOG_SUCCESS, Blog }),
    ];
    
    
  } catch (error) {
     yield put({ type: 'COMPLETE_BLOG_FAILURE', error });
  }
}

export function* deleteBlogSaga({ Blog }) {
   console.log("from deleteBlogsaga call API deleteBlog: ", Blog) ;
   try {  
    const newBlog = yield call(deleteBlog, Blog );
    yield [      
      put({ type: types.DELETE_BLOG_SUCCESS, Blog }),
    ];
  } catch (error) {
    yield put({ type: 'DELETE_BLOG_FAILURE', error });
  }
}

// retrieve a single blog post needs a new API getBlog(id) 
// should take an id and return a blog  

export function* getBlogSaga({ id }) {
  try {  
    const blog = yield call( getBlog, id );
    yield [      
      put({ type: types.GET_BLOG_SUCCESS, blog }),
    ];
  } catch (error) {
    yield put({ type: types.GET_BLOG_FAILURE , error });
  }
}


export function* newBlogSaga({ blog }) {
   console.log("from newBlogSaga call API addNewBlog and pass: ", blog) ;
   try {  
    const newblog = yield call( addNewBlog, blog );
    yield [      
      put({ type: types.NEW_BLOG_SUCCESS, newblog }),
    ];
  } catch (error) {
    yield put({ type: types.NEW_BLOG_FAILURE, error });
  }
}

export function* updateBlogSaga({ id, blog }) {
   console.log("from updateBlogsaga call API updateBlog: ", blog) ;
   console.log("from updateBlogsaga id = ", id ) ;
   try {  
    const edBlog = yield call(updateBlog, id, blog );
    console.log("from updateBlogsaga response = ", edBlog ) ;
    yield [      
      put({ type: types.UPDATE_BLOG_SUCCESS, edBlog }),
    ];
  } catch (error) {
    yield put({ type: types.UPDATE_BLOG_FAILURE, error });
  }
}


