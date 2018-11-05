import _ from 'lodash'
import React, { Component } from 'react'
// import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../app/layout/LoadingComponent';
import moment from 'moment';

import ReactTable from 'react-table' ;

import 'react-table/react-table.css' ;



const mapState = state => ({
  // tasks: state.firestore.ordered.tasks
  tasks: state.firestore.data.tasks
});

class stat2 extends Component {

  // state = {
  //   column: null,
  //   tasks: this.props.tasks,
  //   direction: null,
  // }


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
    // const { column, data, direction } = this.state
    

    if (!isLoaded(tasks) || isEmpty(tasks)) return <LoadingComponent inverted={true} />;

    // console.log({tasks}) ;
    // const data = Object.entries(tasks);
    // console.log(data); 


   //  console.log(" length : " , tasks.length ) ;
    // test map function here : 
    let events = [];

    Object.keys(tasks).map((key, id)=> { 
      // console.log("Key:", key, "id:", id, "Value:",  tasks[key].name );
      // let fixedval = tasks[key].value.toFixed(2);
      let evt = {
        key: key, 
        id: id, 
        name: tasks[key].name, 
        value: tasks[key].value, 
        arg: tasks[key].arg,
        updated: tasks[key].updated,
        task: tasks[key].task 
      } ;      
      events.push(evt);
       }) ;

    // console.table({events})   ; 


    // Object.keys(tasks).map(function(key) { 
    //    return <div>Key: {key}, Value: {tasks[key]}</div>;
    //    }) ;
      
    const columns = [
      
    {
        Header: 'name',      
        accessor: "name"    
  
    },
    {
      Header: 'task',      
      accessor: "task"    

     },

    {
      Header: 'value',      
      accessor: "value"
    },
    {
      Header: 'arg',      
      accessor: "arg"    

    },
   
    {
      id: 'updated', // Required because our accessor is not a string
      Header: 'updated',                
      accessor: d => {
        return moment(d.updated)
          .local()
          .format("dddd, MMMM Do YYYY, h:mm:ss a")
      } 

    }
    
  ]


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
       
            <ReactTable
            data={events}
            noDataText="No Data!"
            columns={columns}
            defaultPageSize={10}
            className="-striped -highlight"
             />


      </div>
    )
  }
}

export default connect(mapState)(
  firestoreConnect([{ collection: 'tasks' }])(stat2)
);
