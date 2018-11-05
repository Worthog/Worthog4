import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../../src/app/layout/LoadingComponent';
import moment from 'moment';



const mapState = state => ({
  // tasks: state.firestore.ordered.tasks
  tasks: state.firestore.data.tasks
});

class stats extends Component {

  state = {
    column: null,
    tasks: this.props.tasks,
    direction: null,
  }


  // componentDidMount() {
  //   db.collection("tasks").get().then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // });
  
 // }


 // LETS leave this out for now   tasks: this.props.tasks.reverse(),

  handleSort = clickedColumn => () => {

    const { column, direction } = this.state
    const {tasks} = this.props.tasks 

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        tasks: _.sortBy(tasks, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      tasks: tasks.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending' 
    })
  }

  render() {

    const { tasks } = this.props;
    const { column, direction } = this.state

    if (!isLoaded(tasks) || isEmpty(tasks)) return <LoadingComponent inverted={true} />;

    // console.log({tasks}) ;

   //  console.log(" length : " , tasks.length ) ;
    // test map function here : 

    // Object.keys(tasks).map((key, id)=> { 
    //   console.log("Key:", key, "id:", id, "Value:",  tasks[key].name );
    //    }) ;




    // Object.keys(tasks).map(function(key) { 
    //   return <div>Key: {key}, Value: {tasks[key]}</div>;
    //    }) ;
      



    return (
        <div>
            <h2>stats/stats.jsx</h2>
            <p>Add a "value" field, task,arg,value</p>
            <p>Next up : Create an API and load the data from the Firebase table. 
              start by adding Firestore Connect (HOC) to this pledmain.  
            </p>
            <p>Skip the sort function, will get it working later. 
              This table is from the react-semantic demo 
              https://react.semantic-ui.com/collections/table/#variations-sortable
            </p>
            <p>We have a problem with sorting because this data is coming from the Firestore
              collection.  We cannot use the sort from the demo because it is basically sorting
              a simple array. 
            </p>


    {/*  DEBUGGING CODE 

    { isLoaded(tasks) && console.log ({tasks}) }   

    { Object.values(tasks).map((data, i) => 
    <li key={i}> {data.name} </li>  )}
     */}

      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
           
            <Table.HeaderCell
              sorted={column === 'task' ? direction : null}
              onClick={this.handleSort('task')}
            >
              task
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'arg' ? direction : null}
              onClick={this.handleSort('arg')}
            >
              arg
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'value' ? direction : null}
              onClick={this.handleSort('value')}
            >
              value
            </Table.HeaderCell>
            
            <Table.HeaderCell
              sorted={column === 'updated' ? direction : null}
              onClick={this.handleSort('updated')}
            >
              updated
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>


        { Object.values(tasks).map((data, i ) => (  
              <Table.Row key={i}>
              <Table.Cell>{data.name}</Table.Cell>              
              <Table.Cell>{data.task}</Table.Cell>
              <Table.Cell>{data.arg}</Table.Cell>   
              <Table.Cell>{data.value}</Table.Cell>           
              <Table.Cell>{moment(data.updated).format("dddd, MMMM Do YYYY, h:mm:ss a")}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default connect(mapState)(
  firestoreConnect([{ collection: 'tasks' }])(stats)
);
