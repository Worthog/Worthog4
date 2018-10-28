import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as BlogActions from './blog-actions'

import BlogNewForm from './Blog-new-form' ; 

class BlogNew extends Component {
	
 handleSubmit = (values) => {
    // Do something with the form values
  console.log("from Blognew passing values object : ", values);
	let valtext = JSON.stringify(values);
	// alert("from BlogNew : "  +  valtext ); 
	// call the actionCreator ...
	let newblog = {};
	newblog.title = values.title;
	newblog.article = values.article;
	// this.props.addNewBlog( values ) ; 
	// this.actions.addNewBlog(values) ; 
	//  *** not sure  BlogActions.addNewBlog(values);
	// this.props.actions.addNewBlog(values);

	// **** Just Pass the Values Object to the action creator **** 
	this.props.actions.addNewBlog(values);

  }	
	
  render() {
	
    return (
	<div className="container">
      <h2>Blog New Container</h2>
	  <p>
	  This is the container object for the
	  blognewform component.  Might want to pass handlesubmit
	  and props to this component. See the widget container example. 
	  </p>	  
	  <p>Now we just need to send the value to the action creator.  See the Todo Example,
		 or the saveBlog method. 
	  </p>
	  <BlogNewForm  onSubmit={this.handleSubmit} />
	</div>	
	)	 
  }
}


function mapStateToProps(State) {
  console.log("state" , State ); 
  return {
    blogs: State.blogs
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
)(BlogNew)
