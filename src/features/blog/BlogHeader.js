import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';

// import { Link } from 'react-router';
import { Link } from 'react-router-dom'
// import {  } from 'react-router'

// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as BlogActions from '../actions/blog-actions'
// import BlogTextInput from './BlogTextInput'


// ** Jan 7, since we cant seem to pass the actions as props, lets use connect. 

class BlogHeader extends Component {

//  constructor(props) {
//  super(props)
//  this.state = { todos : []} ;    
// 	console.log( "from HEADER constructor props = ", props ); 
 //   this.props.addTodo("hello from the header");
//  }   


  
  render() {
    return (
      <header className="header">
         <h1 className="blog-title">Notes</h1>
        
                                  
          <hr/>           
      </header>
    )
  }
}



export default BlogHeader
