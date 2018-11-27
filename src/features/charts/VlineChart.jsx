import React, { Component } from "react";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux' ;
// import * as TaskActions from '../device/DeviceTasks/taskactions' ;
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../app/layout/LoadingComponent';
import {objectToArray} from '../../app/common/util/helpers';
import Moment from 'moment' ; 

//  import './examples.scss';

import {
  
  VictoryChart,
  VictoryLine,
 
  VictoryScatter,
  
  VictoryZoomContainer,
  
  VictoryTheme,
  VictoryTooltip,
 
} from 'victory';


// const MSEC_DAILY = 86400000;


function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}


function filterByValue(item) {
  if (isNumber(item.temperature) && (item.task === "tempvalue") && (item.temperature > 0) ) {
    return true;
  } 
    return false; 
}

// function convertTemp(newval) {   
//   let temp_celsius = (((newval * 3.3) / 4095) - 0.5) * 100 ;
//   return temp_celsius 
// }

// old vresion  var data = tasks.filter(filterByValue).map(item => {


function getTaskData(tasks) {
     // taskData = {
       var data = tasks.filter(filterByValue).map(item => {
      
       item.x =  Moment(item.updated).toDate(); 

       item.y =  item.temperature ;
       return item;  
        } )
    // };
   // console.log ("from getTaskData = ", data ) ;
    return data ;
}

const mapState = state => ({
  // tasks: state.firestore.ordered.tasks
  tasks: state.firestore.data.tasks
});

class VLineChart extends Component {
  
   constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {    	
	//    this.props.actions.getTasksRequest();   
	// } 


  handleZoom(domain) {
      this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
      this.setState({zoomDomain: domain});
  }
  
   
  render() {

    const { tasks } = this.props

    const chartStyle = { parent: {minWidth: "100%", marginLeft: "10%"}};
    
    
    if (!isLoaded(tasks) || isEmpty(tasks)) return <LoadingComponent inverted={true} />;

    let taskArray = [];

    taskArray = objectToArray( tasks ) ;
    // console.log("VlineChart taskArray = ", taskArray ); 

    // let taskData = []

    // Object.keys(tasks).map((key, id)=> { 
        

    //     let evt = {
    //     key: key, 
    //     id: id, 
    //     name: tasks[key].name, 
    //     value: tasks[key].value, 
    //     arg: tasks[key].arg,
    //     updated: tasks[key].updated,
    //     task: tasks[key].task 
    //   } ;      
    //   taskData.push(evt);
    //    }) ;





    // var series = []

 
    var series = [
          {
            title: 'Temp',
            disabled: false,
            data: getTaskData(taskArray)  
          }

          ]

    // console.log ("series = ", series ) ;

    return (
      <div>
      <h3>Temperature Chart</h3>
        <p>Uses a Victory Zoom/Line Chart </p>

         <VictoryChart width={1000} height={400} scale={{x: "time"}} style={chartStyle} theme={VictoryTheme.material}
            // ** Works but not sure how it looks -> 
            domain={{ y: [0, 50] }}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                dimension="x"
                zoomDomain={this.state.zoomDomain}
                onDomainChange={this.handleZoom.bind(this)}
                // labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{fill: "white"}}
              />}
              />
            }
          >
         
            <VictoryLine
              style={{
                data: {stroke: "tomato"},
                parent: {border: "1px solid #ccc"}                
              }}              
              data={series[0].data}                                                       
            />

          <VictoryScatter
            style={{ data: { fill: "red" } }}
            size={2}
            data={series[0].data}               
          />
          
          </VictoryChart>

          {/* <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={1000} height={100} scale={{x: "time"}} style={chartStyle}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                dimension="x"
                selectedDomain={this.state.selectedDomain}
                onDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
             
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
               data={series[0].data}  
              
            />
          </VictoryChart> */}

        
      </div>
    );
  }
}



export default connect(mapState)(
  firestoreConnect([{ collection: 'tasks' }])(VLineChart)
);


