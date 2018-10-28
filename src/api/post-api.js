import axios from 'axios';

export function getAllPosts() {
  return axios.get('http://localhost:3000/api/Posts/all').then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
    console.log("error in post-api getallPosts");
  });
}


export function getPosts(filter) {
  return axios.get('http://localhost:3000/api/Posts/' + filter).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function addPost(text) {
  return axios.post('http://localhost:3000/api/Posts', {
    text: text
  }).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function updatePost(id, post) {
  console.log("from post-api post = ", post ) ;
  return axios.put('http://localhost:3000/api/posts/' + id, post).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function deletePost(post) {
    console.log("from post-api deletepost  = ", post ) ;
  return axios.delete('http://localhost:3000/api/posts/' + post._id, post).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}


export function addNewPost(post) {
  //  alert("api addnewpost") ;
  console.log("post-api from addnewpost : ", post ) ;
  return axios.post('http://localhost:3000/api/posts/' , post).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}
