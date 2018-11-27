import axios from 'axios';
import { getFirebase } from 'react-redux-firebase';


//  databaseURL: "https://revents-6a702.firebaseio.com",
// "https://burger1-5f69a.firebaseio.com/ingredients.json"

// axios.defaults.baseURL = 'http://localhost:1010/'
// axios.defaults.headers.common = {'Authorization': "bearer " + token}

export function getAllBlogs() {
  const firebase = getFirebase();
  // const firestore = getFirestore();
  let token = ''; 
 //  console.log({firebase}, "<--getAllBlogs firebase"); 
 //  console.log({firestore}, "<--getAllBlogs firestore"); 
 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.getIdToken().then(function(data) {
        // console.log(data);
        token = data; 
      });
    }
  });
  // console.log ("token = ", token);

  // var config = {
  //   headers: {'Authorization': "bearer " + token}
  // };


  // const queryParams = "?auth=" +  token + '"';

  axios.defaults.headers.common = {'Authorization': "bearer " + token}; 
  return axios.get('https://revents-6a702.firebaseio.com/blogs.json'  ).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
    console.log("error in blog-api getallBlogs");
  });
}


export function getBlogs(filter) {
  return axios.get('http://localhost:3000/api/blogs/' + filter).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function addBlog(text) {
  return axios.post('http://localhost:3000/api/blogs', {
    text: text
  }).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

// old version 

// export function updateBlog(id, blog) { 
//   console.log("from blog-api updateblog id = ", id ) ;
//   return axios.put('http://localhost:3000/api/blogs/' + id, blog).then(function(response) {
//     return response.data;
//   }).catch(function(err) {
//     console.error(err);
//   });
// }

export function deleteBlog(blog) {
    console.log("from blog-api deleteblog  = ", blog ) ;
  return axios.delete('http://localhost:3000/api/blogs/' + blog._id, blog).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

// note this is plaind id  NOT  _id  

export function getBlog(id) {
  console.log("from blog-api getBlog by id = ", id ) ;
  return axios.get('http://localhost:3000/api/blogs/' + id).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}



export function addNewBlog(blog) {
  
  console.log("blog-api from addnewblog : ", blog ) ;
  const firebase = getFirebase();
  
  // const firestore = getFirestore();
  
  let token = ''; 
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.getIdToken().then(function(data) {      
        token = data; 
      });
    }
  });

  axios.defaults.headers.common = {'Authorization': "bearer " + token}; 
  
  return axios.post('https://revents-6a702.firebaseio.com/blogs.json' , blog).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}


// updating the blog in firebase might be tricky since we need to specify the id of
// the blog receiving the update 

export function updateBlog(id, blog) { 
  console.log("from blog-api updateblog id = ", id ) ;
  const firebase = getFirebase(); 
  let token = ''; 
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.getIdToken().then(function(data) {      
        token = data; 
      });
    }
  });
  axios.defaults.headers.common = {'Authorization': "bearer " + token}; 

  // this did not work axios.put('https://revents-6a702.firebaseio.com/blogs.json/{$id}', blog)

  return axios.put('https://revents-6a702.firebaseio.com/blogs/' + id + '.json', blog).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}
