import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' ;
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import ToDoList from './ToDoList/ToDoList';
import LoadingComponent from '../../app/layout/LoadingComponent';

const query = [
  {
    collection: 'ToDos',
    orderBy: ['updated', 'desc'],    
  }
]

const mapState = state => ({
  todos: state.firestore.ordered.ToDos,
});


class ToDoContainer extends Component {

  render() {
    const { todos } = this.props;
   //  console.log ("todos = " , {todos} );
 
    if (!isLoaded(todos) || isEmpty(todos)) return <LoadingComponent inverted={true} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          {<ToDoList todos={todos} /> }
        </Grid.Column>
        <Grid.Column width={6}>
          <h4>ToDoContainer</h4>

          <Button as={Link} to={`/addtodo`} color="grey"  content="Add To Do" />  
          <h4>Nov 15</h4>  
          <p>Fixed the dates to be compatible with Firestore.  Cleaned up the forms and added a markdown editor
             The list is sorted by the "updated" date field. 
          </p>

          <h4>Nov 14</h4>  
          <p>Added a Query statement to retrieve the todos by Created date.
            should add a timestamp field?  see the EventDashboard. 
          </p>

          <h4>Nov 12</h4>  
          <p>See the DeviceReducer, interesting setup.  The ActiveDeviceReducer is interesting as well. 
            Note : firebase Collection (uppercase) "ToDos", not sure if that matters?
          </p>
          <h4>Nov 11</h4>  
          <p>Lets start with a new todo form. Use DeviceForm as a template.

          </p>
          <p>
             will need some action creators as well.              
          </p>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(
  firestoreConnect(query)(ToDoContainer)
);
