import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form';
// import { withFirestore } from 'react-redux-firebase';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import * as BlogActions from '../blog-actions';
import TextInput from '../../../app/common/form/TextInput';
import TextBox from '../../../app/common/form/TextBox';
import DateInput from '../../../app/common/form/DateInput';
// import _ from 'lodash';

// const mapState = (state, ownProps) => {
 
 
//   return {
//     initialValues: blog,
//     blog,
//     loading: state.async.loading
//   };
// };

// const actions = {
//   addNewBlog,
//   updateBlog
  
// };



const validate = combineValidators({
  title: isRequired({ message: 'A title is required' }), 
  description: composeValidators(
    isRequired({ message: 'add some notes about your device' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'
    })
  )(),
 
  // date: isRequired('date')
});


class BlogForm extends Component {

  
 
  componentDidMount() {   

    console.log("Blog Form * Note new react router version requires match");

    console.log ("id = " ,  this.props.match.params.id ) ; 	
  
    var id = this.props.match.params.id ;	
  
    let blogObject = {}; 
    // let initialValues = {}; 
    console.log("find Blog by id : ", id ) ; 
    // blogObject =  _.find( this.props.blogs, {'id' : id} ) ; 
    let itemIndex = this.props.blogs.findIndex(i=> i.id === id);
    //  console.log ("update deviceobj: ", blogObject); 
    console.log ("item index = : ", itemIndex); 
    blogObject = this.props.blogs[itemIndex];
    console.log ("update blogObject: ", blogObject); 
    // let initialValues = blogObject ;
  } 
  

  // state = {
  //   cityLatLng: {},
  //   venueLatLng: {},
  //   scriptLoaded: false
  // };

  // async componentDidMount() {
  //   const {firestore, match} = this.props;
  //   await firestore.setListener(`devices/${match.params.id}`);
  //   console.log("deviceForm did mount id : ", this.props.initialValues.id );
  // }

  // async componentWillUnmount() {
  //   const {firestore, match} = this.props;
  //   await firestore.unsetListener(`devices/${match.params.id}`);
  // }
 
   

  onFormSubmit = values => {
    
    console.log("On submit id = ", this.props.initialValues.id  )
    if (this.props.initialValues.id) {      
      const id = this.props.match.params.id;
      this.props.actions.updateBlog(id, values);
      this.props.history.goBack();
    } else {
      this.props.actions.addNewBlog(values);
      this.props.history.push('/blogs');
    }
  };

  render() {
    const { invalid, submitting, pristine, loading } = this.props;
    return (
      <Grid>
        
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Blog" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <label>Title</label>              
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="title"
              />
              <label>Name</label>              
              <Field
                name="username"
                type="text"
                component={TextInput}
                placeholder="Written by:"
              />


             <label>Description</label> 
              <Field
                name="article"
                type="text"
                component={TextBox}
                rows={3}
                placeholder="A few words ..."
              />
             
              <label>Date</label>  
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="date"
              />
              <Button
                loading={loading}
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button disabled={loading} onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
              
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
      // FetchBlog: (id) => dispatch( actions.getBlog(id) )
      actions: bindActionCreators(BlogActions, dispatch)
  };
};

function mapStateToProps(state, ownProps) {

  const blogId = ownProps.match.params.id;
  let blogObject = {}; 
  if (blogId && state.blog.blogs.length > 0) {
    blogObject = state.blog.blogs.filter(i => i.id === blogId)[0];
  }
  return {   
	  blogs: state.blog.blogs,
    loading: state.blog.loading, 
    initialValues : blogObject     
  }
}

export default 
  connect(mapStateToProps, mapDispatchToProps )(
    reduxForm({ form: 'blogForm', enableReinitialize: true, validate })(
      BlogForm
    )
  )

