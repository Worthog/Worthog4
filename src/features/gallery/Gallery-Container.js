import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as PostActions from './post-actions';
import PhotoGrid from './PhotoGrid'; 

// Jan 14, see main.js for render...
// Jan 17 - removed  {posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)} 

class GalleryContainer extends Component {


render() {
    const { posts, actions } = this.props
    console.log ("gallerycontainer this.props : ", this.props ) ;
    console.log ("gallerycontainer passing actions : ", actions) ;
    console.log ("gallerycontainer passing posts : ", posts) ;
   
    return (
      <div>
        
         <p>Lets add a NEW button here, eventually it might go in the header.  See the blog page new button. </p>
             
         <PhotoGrid posts={posts} actions={actions}  />
		          
      </div>
    )
  }
  
  componentDidMount() {
    // alert("gallery");
    // this.props.actions.getPosts();        					
	} 

}


 function mapStateToProps(state) {
  // console.log("state", state ); 
   return {
   posts: state.posts,  
  }
 }


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer)
