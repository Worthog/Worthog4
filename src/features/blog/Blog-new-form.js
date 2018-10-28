import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
// import { Button, Input, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router';
// import { browserHistory } from 'react-router'

class BlogNewForm extends Component {


handleNewBlog_return() {
    const path = `/blogs`
    // browserHistory.push(path)
 }

  render() {
	console.log("Blognewform Props = " , this.props); 
    const { handleSubmit } = this.props;
    return (
		
		
      <form onSubmit={handleSubmit}>
	    <h4>Add a new Blog</h4>	
		<label>blog title: </label> 
		
		  <Field
          name="title"
          component="input"
          type="text"
          />
    		
		
		
		 <label>username: </label> 
	      
        <Field
          name="username"
          component="input"
          type="text"
          />
        
		 <br/>
	  
	  
		  <label>article: </label> 
	    	    
        <Field
          name="article"
          component="textarea"
          type="text"
		  style={{width:"650px", height:"150px"  }}
          />
        
		 <br/>	  
	  
	  
        <br/>
         <div className="form-group">     
        <button type="submit" className="btn btn-primary" >Save</button>
        {'  '}
	    	<button type="button" id="btn_newblog_rtn" 
           className="btn btn-default" 
           onClick={this.handleNewBlog_return.bind(this)} >Return</button>
        </div>
    
      </form>
    );
  }
}

// Decorate the form component
BlogNewForm = reduxForm({
     form: 'blognewform' // a unique name for this form
})(BlogNewForm);

export default BlogNewForm;

//   handleReturn() {   
//    const path = `/todos`
//    browserHistory.push(path)
// }