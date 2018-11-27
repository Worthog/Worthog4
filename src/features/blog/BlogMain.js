import React, { Component } from 'react'
import BlogItem from './BlogItem'

import { connect } from 'react-redux'
import { Grid, Button, Header, Sticky, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom' ;
// import Remarkable from 'remarkable'; 


class BlogMain extends Component {

state = {
  initialLoading: true
} 

handleContextRef = contextRef => this.setState({ contextRef })

render() {
    
    const { blogs, loading } = this.props;
    const { contextRef } = this.state   
    return (

      <Grid>
        <Grid.Column width={12}>
        
          { !loading && blogs.map ((d) => <BlogItem key={d.id} title={d.title} blog={d} /> ).reverse() }        

        </Grid.Column>
        <Grid.Column width={4}  >
        <div ref={this.handleContextRef} >
                 
                <Sticky context={contextRef} style={{position: "fixed" }} >
                  <Header as='h4'>Add a post</Header> 
                  <p>You can create a new post using "markdown" or plain text by
                    selecting one of the buttons below.</p>

                  <Button as={Link} to={`/blogedit`} color='blue' content="Markdown" />         
                  <Button as={Link} to={`/blognew`} color='blue' content="Text" />                   
                  
                             
              <Item.Group>
                <Item>
                  <Item.Content>
                    <h4> React-Markdown Demo </h4>
                    <Button as={Link} to={`/blogdemo`} color='blue' content="Demo" />
                  </Item.Content>
                </Item>
              </Item.Group>
                                    
                </Sticky>         
       
        </div> 
        </Grid.Column>
      </Grid>
      
      )
  }
}


function mapStateToProps(state) {
  return {
   
	  blogs: state.blog.blogs,
    loading: state.blog.loading
  }
}


export default connect(
  mapStateToProps  
)(BlogMain)



