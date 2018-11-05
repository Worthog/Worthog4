import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import classnames from 'classnames'
import { Segment, Item, Icon, Button, Container } from 'semantic-ui-react';
import moment from 'moment' ; 
var Remarkable = require('remarkable') ;
	
// var prettydate = Moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
//  console.log('from BlogItem Local Date : ', prettydate); 

//   dangerouslySetInnerHTML={this.getRawMarkup(blog.article)}

class BlogItem extends Component {
  
   

getRawMarkup(txt) {
    var md = new Remarkable();
    return { __html: md.render( txt ) };
  }
  
// {Moment(blog.createdate).format( "dddd, MMMM Do YYYY, h:mm a" )}  

  render() {

    const { blog } = this.props
  
    // console.log ("blog item props = " , this.props ); 

    let element
     
      element = (

      <Segment.Group>
         <Segment>
         <Item.Group>
            <Item>              
              <Item.Content>
                <Item.Header as={Link} to={`/blog/${blog.id}`}>{blog.title}</Item.Header>
                <Item.Description>
                   by {blog.username}  {','}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}	
                   <span>
            <Icon name="clock" /> 
            Date Created: {'\u00A0'}{'\u00A0'} {moment(blog.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}	            
          </span>
                </Item.Description>                
              </Item.Content>
            </Item>
          </Item.Group>
         </Segment>        
        <Segment>
        <Container fluid>
        {blog.article}
        </Container>
        </Segment>
        <Segment clearing>       
          <Button as={Link} to={`/blog/${blog.id}`} color="teal" floated="right" content="Edit" />
        </Segment>
      </Segment.Group>  
      
      );


    return (
      <div className="blog-post">        
        {element}      
      </div>
    )
  }
}


export default BlogItem
// Jan 29, removed the class names and the LI 