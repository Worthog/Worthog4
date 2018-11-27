import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withFirestore } from 'react-redux-firebase';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { toastr } from 'react-redux-toastr'
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';

// import actions from './ToDoActions' ;
import { addToDo, updateToDo } from './ToDoActions' ;


import TextInput from '../../app/common/form/TextInput';
// import TextArea from '../../app/common/form/TextArea';
import DateInput from '../../app/common/form/DateInput';
import ReactMDE from 'redux-forms-markdown-editor';
import SelectInput from '../../app/common/form/SelectInput';

const initialSource = `
### Preview - window 
This is not working because of the onChange function
see features/blog/blogedit/blogedit.jsx
`


const topics = [
  { key: 0, text: 'All', value: 'All' },
  { key: 1, text: 'Photon', value: 'Photon' },
  { key: 2, text: 'General', value: 'General' },
  { key: 3, text: 'Documents', value: 'Documents'  },
  { key: 4, text: 'Beer', value: 'Beer' },
  { key: 5, text: 'Hardware', value: 'Hardware' },
  { key: 6, text: 'Software', value: 'Software' }
]


// const mapState = (state) => {{
  
//   ToDos : firestore.ordered.Todos
 
// } };

// console.log("deviceForm state.firestore:  ", state.firestore);  
// const actions = {
//  // addToDo,
//  //  updateToDo
  
const mapState = (state, ownProps) => {
  let todo = {};

  let id = ownProps.match.params.id;

 //  var id = this.props.match.params.id ;	
      console.log("map state id : ",  id );

  if (id === undefined) {
     // id = "no id";
     console.log("todoForm id : ", id );
  }
  else{
     todo = state.firestore.ordered.ToDos[0];
  }

  return {
    initialValues: todo,
    todo,
    loading: state.async.loading,
    markdownSrc: initialSource,
  };
};



const validate = combineValidators({
  title: isRequired({ message: 'A todo name is required' }), 
  description: composeValidators(
    isRequired({ message: 'add some notes about your todo' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'
    })
  )(),
 
  date: isRequired('date')
});

class ToDoForm extends Component {
 


  async componentDidMount() {

    // console.log ("ToDo Form id = " ,  this.props.match.params.id ) ; 	
  
    let id = null;
    let todo = {};

    if (this.props.match.params.id === undefined) {
      id = "no id";
      console.log("todoForm did mount id : ", id );
      
      this.setState({initialValues: todo });
      this.setState({todo: todo });

    }
    else {
      id = this.props.match.params.id ;	
      console.log("todoForm set listener id : ",  id );
      const {firestore, match} = this.props;

    //   const firestore = firebase.firestore();

      todo = await firestore.get(`ToDos/${match.params.id}`);


     //  await firestore.setListener(`todo/${match.params.id}`);

     //  var docref = db.collection("cities").doc("SF");

    // this does not work   todo = await this.state.ToDos.get(id);
    //  console.log("Selected todo = " , {todo}) ;
      await firestore.setListener(id);

      // NOT SURE ABOUT THIS --> todo = await firestore.get(id);
      
      if (!todo.exists) {
        toastr.error('Not found', 'This is not the todo you are looking for')
       
      }else {
          this.setState({initialValues: todo });
          this.setState({todo: todo });
      }
     
      // todo = this.state.firestore.ordered.ToDos[0];

      // if (this.state.firestore.ordered.ToDos && this.state.firestore.ordered.ToDos[0]) {
      //   todo = this.state.firestore.ordered.ToDos[0];
      // }
     
      // let docRef = this.state.firestore.collection('ToDos').doc(id) ;
      // docRef.get().then(function(doc) {
      //   if (doc.exists) {
      //       console.log("Document data:", doc.data());
      //   } else {
           
      //       console.log("No such document!");
      //   }
      // }).catch(function(error) {
      //     console.log("Error getting document:", error);
      // });





     
     
      // if (this.state.firestore.ordered.ToDos && this.state.firestore.ordered.ToDos[0]) {
      //   todo = this.state.firestore.ordered.ToDos[0];
      // }

      // todo = this.state.firestore.ordered.ToDos[0];
      // this.setState({initialValues: todo });
      // this.setState({todo: todo });
      // console.log("todoForm id : ", this.props.initialValues.id );
      // here we should set the local state ????

    }

  
    // const {firestore, match} = this.props;
    // await firestore.setListener(`todo/${match.params.id}`);
    // console.log("todoForm did mount id : ", this.props.initialValues.id );
  }

  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`todo/${match.params.id}`);
  }

  // handlePriority(value) {
  //   alert("u clicked handlepriority, not sure if I need this? "); 
  // }
 
  handleMarkdownChange(e) {
    if (e !== undefined) {
      console.log("on Change e.target =  ", e.target) ;
      this.setState({markdownSrc: e.target.textContent})
    }

  }

  onFormSubmit = values => {
    
    console.log ("Form Submit id = " , this.props.initialValues.id ); 

    if (this.props.match.params.id === undefined) {
      addToDo(values);
      this.props.history.push('/todos');
     } else {
      updateToDo(values); 
      this.props.history.goBack();
     };


    // this.updateToDo(values);

    // if ( this.props.initialValues.id ) {      
      
     
    //   updateToDo(values);
      
    //   this.props.history.goBack();
    // } else {
    //   addToDo(values);
    //   this.props.history.push('/todos');
    // }
  };

  render() {
    const { invalid, submitting, pristine, loading } = this.props;
    return (
      <Grid>
        
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="To Do" />
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
                placeholder=" User name"
                value="Alan"
              />
             <label>Note</label> 
              <Field
                name="note"
                type="text"
                component={ReactMDE}
                rows={3}
                placeholder="A few words"
              />
              
              <Segment>
                <label>Priority : &nbsp; &nbsp; &nbsp; </label>
              
                <label><Field
                  name="priority"
                  component="input"
                  type="radio"                  
                  value="1" /> High</label>
                {'  '}
                <label><Field name="priority" component="input" type="radio" value="2" /> Medium</label>
                {'  '}
                <label><Field name="priority" component="input" type="radio" value="3" /> Low</label>
              </Segment>
             
              <Segment>
               
               <Form.Field
                 control={Field}
                 label="Complete: "
                 name="complete"
                 component="input"
                 type="checkbox"
               />

             </Segment>

              <Segment>
              <label>Category</label> 
                 <Field
                 name="category"
                 type="text"
                 component={SelectInput}
                 options={topics}
                 placeholder="Select a Category"
               />
              
              </Segment>

             
              <Segment>
              <label>Start Date</label>  
              <Field
                name="startdate"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="start date"
              />
               <label>End Date</label>  
              <Field
                name="enddate"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="end date"
              />
             </Segment>

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


export default withFirestore(
  connect(mapState)(
    reduxForm({ form: 'todoForm', enableReinitialize: true, validate })(
      ToDoForm
    )
  )
);

// ([{}])