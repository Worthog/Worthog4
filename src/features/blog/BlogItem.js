import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import classnames from 'classnames'
import { Segment, Item, Icon, Button, Container, Popup } from 'semantic-ui-react';
import moment from 'moment' ; 
import ReactMarkdown from 'react-markdown' ;
import CodeBlock from './blogdemo/code-block' ;
import styles from './blog.css' ;

// var Remarkable = require('remarkable') ;
	
// var prettydate = Moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
//  console.log('from BlogItem Local Date : ', prettydate); 

//   dangerouslySetInnerHTML={this.getRawMarkup(blog.article)}

class BlogItem extends Component {
  
   

// getRawMarkup(txt) {
//     var md = new Remarkable();
//     return { __html: md.render( txt ) };
//   }
  
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
                <h3 className={styles.blogheader} >{blog.title} </h3>
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
        <ReactMarkdown
            className="result"
            source={blog.article}            
            renderers={{code: CodeBlock}}
          />        
        </Container>
        </Segment>
          <Segment clearing>
            <Popup
              trigger={<Button as={Link} to={`/blog/${blog.id}`} icon="edit" color="teal" floated="right" content="Edit" />}
              content='Edit as text' />
            <Popup
              trigger={<Button as={Link} to={`/blogedit/${blog.id}`} icon="edit" color="yellow" floated="right" content="Markdown" />}
              content='Edit with Markdown' />
          </Segment>
      </Segment.Group>  
      
      );

//  <Popup trigger={<Button icon='add' />} content='Add users to your feed' />
//  <Button as={Link} to={`/blogedit/${blog.id}`} color="teal" floated="right" content="Markdown" />
    return (
      <div className={styles.blogpost}>        
        {element}      
      </div>
    )
  }
}


export default BlogItem
// Jan 29, removed the class names and the LI 
// className={styles.fixedmenu}
// was :    <div className="blog-post">   
// className={styles.blogheader} 
// <Item.Header className={styles.blogheader} as={Link} to={`/blog/${blog.id}`} >{blog.title} </Item.Header>    