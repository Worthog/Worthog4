import React, {Component} from 'react' 
import { connect } from 'react-redux' 
import Photo from './Photo'
import {objectToArray} from '../../app/common/util/helpers';
import classes from './gallery.css'; 


class PhotoGrid extends Component {


  // { !loading && blogs.map ((d) => <BlogItem key={d.id} title={d.title} blog={d} /> ) } 

// OLD VERSION: {postArray.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)} 

  render() {
   
    const { posts } = this.props
    // REMOVE FOR NOW    {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)} 
    let postArray = [];
    postArray = objectToArray( posts.posts ); 
    console.log("PhototGrid postArray = ", postArray ); 
    return (
      <div className={classes.photogrid}>
        {postArray.map((d) => <Photo key={d.id} post={d} />)} 
      </div>
      )
     }
}

function mapStateToProps(state) {
  return {
	  posts: state.posts   
   
  }
}

export default connect(
  mapStateToProps  
)(PhotoGrid)

