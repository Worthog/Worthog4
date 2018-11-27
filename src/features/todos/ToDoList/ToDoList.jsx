import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';
import { Menu, Container, Dropdown, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' ;

//  import firebase from '../../../app/config/firebase';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE,SHOW_HIGH,SHOW_MEDIUM, SHOW_LOW } from '../TodoFilters' ;
import styles from '../ToDo.css' ;

const priorities = [
  { key: 1, text: 'High', value: 1 },
  { key: 2, text: 'Medium', value: 2 },
  { key: 3, text: 'Low', value: 3 },
  { key: 4, text: 'All', value: 0 },
]

const topics = [
  { key: 0, text: 'All', value: 'All' },
  { key: 1, text: 'Photon', value: 'Photon' },
  { key: 2, text: 'General', value: 'General' },
  { key: 3, text: 'Documents', value: 'Documents'  },
  { key: 4, text: 'Beer', value: 'Beer' },
  { key: 5, text: 'Hardware', value: 'Hardware' },
  { key: 6, text: 'Software', value: 'Software' }
]


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.complete,
  [SHOW_COMPLETED]: todo => todo.complete, 
  [SHOW_HIGH]: todo => todo.priority==="1" && !todo.complete  ,
  [SHOW_MEDIUM]: todo => todo.priority==="2" && !todo.complete ,
  [SHOW_LOW]: todo => todo.priority==="3"  && !todo.complete

}


const query = [
  {
    collection: 'ToDos',
    orderBy: ['updated', 'desc'],    
  }
]

const mapState = state => ({
  todos: state.firestore.ordered.ToDos,
});



class ToDoList extends Component {

  state = { 
    activeItem: ' ' ,
    value: 0 ,
    topic: 'All',
    filter: 'SHOW_ALL'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }) ;
    // console.log("State = ", this.state) ;
  }

  handlePriorityChange = (e, { value }) => {
    // console.log("priority data = ", {value}) ;
    if (value === 0 ) { this.setState({ filter : SHOW_ALL }) } ;
    if (value === 1 ) { this.setState({ filter : SHOW_HIGH }) } ;
    if (value === 2 ) { this.setState({ filter : SHOW_MEDIUM }) } ;
    if (value === 3 ) { this.setState({ filter : SHOW_LOW }) } ;

    // this.setState({ filter : SHOW_HIGH }) ;

    // console.log("State = ", this.state) ;
    // console.log("TODO filter= ",  TODO_FILTERS[SHOW_LOW] )
    
  }
 
 

  handleTopicChange = (e, { value }) => {
    console.log("event data = ", {value}) ;
    this.setState({ topic: value});
    
  }


  handleShowAll = () => {   
    this.setState({filter: SHOW_ALL});  
  }


  handleShowComplete = () => {   
    this.setState({filter: SHOW_COMPLETED});  
  }


  handleShowActive = () => {   
    this.setState({filter: SHOW_ACTIVE});  
  }

// on didMount, set query to : load all and order by Updated

  async componentDidMount(){

    // const firestore = firebase.firestore();
    
    // let todosRef = firestore.collection('ToDos');

    // let query; 

    // query = todosRef 
    //       .orderBy('updated', 'desc') ;    
      
    // let todos = await query.get(); 

   
    // console.log( "todos = ", todos );

  }



  render() {

    const { todos } = this.props;
    const { topic, value } = this.state;
   
    let filteredTodos ;
   
    if (!isLoaded(todos) || isEmpty(todos)) return <LoadingComponent inverted={true} />;
   
   // *** Count the items ***

    let itemCount = todos.length ;
    const completeCount = todos.reduce((count, todo) =>
          todo.complete ? count + 1 : count, 0 )
    
    const activeCount = todos.length - completeCount ;  

    // console.log("filter : ", this.state.filter); 
    // console.log("function : ", TODO_FILTERS[SHOW_HIGH] ); 
    // filteredTodos = todos.filter(TODO_FILTERS[filter])
    // filteredTodos = todos.filter( todo => todo.priority==="3" ); 

    // *** filter the ToDo list ***

    switch (this.state.filter) {

      case SHOW_HIGH:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_HIGH]);
        break;

      case SHOW_MEDIUM:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_MEDIUM]);
        break;

      case SHOW_LOW:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_LOW]);
        break;
      
      case SHOW_ACTIVE:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_ACTIVE]);
        break;  

      case SHOW_COMPLETED:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_COMPLETED]);
        break;  

      default:
        filteredTodos = todos.filter(TODO_FILTERS[SHOW_ALL]);

    }


//    console.log("filtered todos : ", filteredTodos); 

    return (
     <div>
      <Header className={styles.todonavbar} >
      <Menu >
       
            <Menu.Item name="Items" >              
              <Button primary onClick={this.handleShowAll} >Items {itemCount}</Button>
              </Menu.Item>
            <Menu.Item name="Active" >
            <Button color="teal" onClick={this.handleShowActive} >Active {activeCount}</Button>
            
              </Menu.Item>
            <Menu.Item name="Complete">
            <Button color="red" onClick={this.handleShowComplete} >Complete {completeCount}</Button>            
              </Menu.Item>


            <Menu.Item name="Chart">
               Priority &nbsp; 
               <Dropdown 
               
                options={priorities} 
                selection 
                compact
                value={value}
                onChange={this.handlePriorityChange}
                />
                
            </Menu.Item>

            <Menu.Item name="Chart">
               Topic &nbsp; 
               <Dropdown 
                compact
                options={topics} 
                selection 
                value={topic}
                onChange={this.handleTopicChange}
                />
                
            </Menu.Item>
            <Menu.Item name="add" >              
              <Button as={Link} to={`/addtodo`} color="grey"  content="Add To Do" /> 
            </Menu.Item>

 

            </Menu>
        </Header>
        <Container>
        {/*  the filtered version  */}
      
         {todos && filteredTodos.map( todo => (
              < ToDoListItem key={todo.id} todo={todo} />
            ))}  
       
       </Container> 
    </div>
    );
  }
}

export default connect(mapState)(
  firestoreConnect(query) (ToDoList)
);
