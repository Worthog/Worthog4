import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogMain from './BlogMain'
import BlogHeader from './BlogHeader'
import * as BlogActions from './blog-actions'


class BlogContainer extends Component {
  render() {
    const { blogs, actions } = this.props
  
    return (
      <div>
        <BlogHeader addBlog={actions.addBlogAction} />
        <BlogMain blogs={blogs} actions={actions} />        
      </div>
    )
  }



  componentDidMount() {
   
	   this.props.actions.getBlogsAction();
   
	} 

}


function mapStateToProps(State) {
 
  return {
    blogs: State.blog.blogs 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogContainer)
