import React, { Component } from 'react'
import BlogItem from './BlogItem'

import { connect } from 'react-redux'
import { Grid, Button, Segment, Rail , Image, Header, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom' ;
import Remarkable from 'remarkable'; 
class BlogMain extends Component {

state = {
  initialLoading: true
} 

handleContextRef = contextRef => this.setState({ contextRef })

render() {
    
    const { blogs, loading, actions } = this.props;
    const { contextRef } = this.state   
    return (

      <Grid>
        <Grid.Column width={12}>
        
          { !loading && blogs.map ((d) => <BlogItem key={d.id} title={d.title} blog={d} /> ) }        

        </Grid.Column>
        <Grid.Column width={4} >
        <div ref={this.handleContextRef}>
         
        
                <Sticky context={contextRef} >
                  <Header as='h3'>Stuck Content</Header>
                  <h4>Blog Main Page</h4>          
                  <Button as={Link} to={`/blognew`} color='blue' content="New Post" />                   
                  <p>Lets move the stats and demo buttons from the list item to this page. </p>
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



