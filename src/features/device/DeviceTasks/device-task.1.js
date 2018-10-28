import React, { Component, PropTypes } from 'react'
import { Panel, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TaskActions from '../../actions/task-actions'

var Particle = require('particle-api-js');


class DeviceTask extends Component {

  constructor(props) {
  super(props)
	
 
  // var deviceId = '2b0043000747343232363230' ;
  // var token =  'fdf57dc12fe5f3b34a3ba07d4d7a076ec4b3422a' ;
  // var variableName = "";
  // var particleURL = "https://api.spark.io/v1/devices/";  //Web address for the Spark API
  //  var particle = new Particle();
  //  console.log("from constructor Particle :" , particle ) ;
  }    
 
 componentDidMount() {
      
  //  var deviceId = '2b0043000747343232363230' ;
  //  var token =  'fdf57dc12fe5f3b34a3ba07d4d7a076ec4b3422a' ;      
  //  var particle = new Particle(deviceId, token);
 //   var deviceResponse = particle.getDevice({ deviceId: deviceId, auth: token });
 //   console.log("from CoreTask function :" ,  JSON.stringify(deviceResponse) ) ;

  }
   
 callFunction (functionName, paramString, callback) {
        
        var particleURL = "https://api.spark.io/v1/devices/";  //Web address for the Spark API
        // var deviceId = '2b0043000747343232363230' ;
        // ** Get from state ????
        var deviceId = this.props.activedevice.deviceid ;
        // var token =  'fdf57dc12fe5f3b34a3ba07d4d7a076ec4b3422a' ;     
        var token =  this.props.activedevice.token ;     
        var url=particleURL+deviceId+"/"+functionName;  //Build up the API request URL.
        var params="args="+paramString;              //Build up the parameter string for the POST
        var anHttpRequest = new XMLHttpRequest(); //Get an HTTP requestor object from the browser
        anHttpRequest.open("POST", url, true);  //Open our POST with the url constructed above.

        anHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  //Tell the server we are posting some data
        anHttpRequest.setRequestHeader("Authorization","Bearer "+ token);  //Pass the access Token as a header value.

        anHttpRequest.onreadystatechange = function() {//Define the function to handle the API response
            if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200) { //Did we get a good response?
                var status=JSON.parse(anHttpRequest.responseText);  //Parse the JSON response body
                console.log("Function LED Response:" + JSON.stringify(status)); 
                if (callback!==undefined) {
                    callback(status);
                }
            }
        };
        anHttpRequest.send(params);  //Finish the request, when the server responds we will execute the handler function above.
    };


 handleToggleLED_ON( taskobj ) {      
    console.log("handle toggle LED : ON") ;  
    //  this.setState({led: 'ON'}); 
        
    taskobj.command = 'LED ON'; 	
    taskobj.component = 'LED'; 
    taskobj.value = 1; 	
    taskobj.updated = new Date(); 

	  this.props.actions.toggleLED(taskobj);
   
   //  var deviceId = '2b0043000747343232363230' ;
   //  var token =  'fdf57dc12fe5f3b34a3ba07d4d7a076ec4b3422a' ;      
   //  var particle = new Particle(deviceId, token);
    // var deviceResponse = particle.getDevice({ deviceId: deviceId, auth: token });
    // console.log("from CoreTask function :" ,  JSON.stringify(deviceResponse) ) ;

    this.callFunction("led", "on", "" );   //Use the SparkJS function to call the Spark Core registered           
    // console.log("Function LED Response:" + JSON.stringify(result)); //Just dump the result object to the console. Use the JS consol
    }

// onSparkLED 

//  onSparkLED(result) { //Callback function for the LED (ON/OFF) button
//       console.log("Function LED Response:" + JSON.stringify(result)); //Just dump the result object to the console. Use the JS consol
//  } //to view result. Could do a lot of stuff but keeping it simple now.
        

 handleToggleLED_OFF( taskobj ) {      
    console.log("handle toggle LED : OFF") ;   	
    taskobj.command = 'LED OFF'; 	
    taskobj.component = 'LED'; 
    taskobj.value = 0; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("led", "off", "" );    //Use the SparkJS function to call the Spark Core registered           
 }

handleSW1_OFF( taskobj ) {      
    console.log("SW1 : OFF") ;   	
    taskobj.command = 'SW1 OFF'; 	
    taskobj.component = 'SW1'; 
    taskobj.value = 0; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw1", "off", "" );    //Use the SparkJS function to call the Spark Core registered           
 }


 handleSW1_ON( taskobj ) {      
    console.log("SW1 : ON") ;   	
    taskobj.command = 'SW1 ON'; 	
    taskobj.component = 'SW1'; 
    taskobj.value = 1; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw1", "on", "" );    //Use the SparkJS function to call the Spark Core registered           
 }



handleSW2_OFF( taskobj ) {      
    console.log("SW2 : OFF") ;   	
    taskobj.command = 'SW2 OFF'; 	
    taskobj.component = 'SW2'; 
    taskobj.value = 0; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw2", "off", "" );    //Use the SparkJS function to call the Spark Core registered           
 }


 handleSW2_ON( taskobj ) {      
    console.log("SW2 : ON") ;   	
    taskobj.command = 'SW2 ON'; 	
    taskobj.component = 'SW2'; 
    taskobj.value = 1; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw2", "on", "" );    //Use the SparkJS function to call the Spark Core registered           
 }


handleSW3_OFF( taskobj ) {      
    console.log("SW3 : OFF") ;   	
    taskobj.command = 'SW3 OFF'; 	
    taskobj.component = 'SW3'; 
    taskobj.value = 0; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw3", "off", "" );    //Use the SparkJS function to call the Spark Core registered           
 }


 handleSW3_ON( taskobj ) {      
    console.log("SW3 : ON") ;   	
    taskobj.command = 'SW3 ON'; 	
    taskobj.component = 'SW3'; 
    taskobj.value = 1; 	
    taskobj.updated = new Date(); 
	  this.props.actions.toggleLED(taskobj);
    this.callFunction("sw3", "on", "" );    //Use the SparkJS function to call the Spark Core registered           
 }

render() {
   
  console.log ("device-task props : ", this.props) ;

 //  const newdeviceid = this.props.activedevice.deviceid;
 //  console.log ("newdeviceid: ", newdeviceid); 

   let taskobj = {}; 
   taskobj = {    
      name: this.props.activedevice.name ,
      component: '',
      startdate : new Date(), 
      updated : new Date(), 
      command: '', 
      value :  0, 	
      deviceid: this.props.activedevice.deviceid ,
      token: this.props.activedevice.token
    }; 
    
    console.log ("new taskobj: ", taskobj); 
    // const newdeviceid = this.props.activedevice.deviceid;
    // console.log ("newdeviceid: ", newdeviceid); 

    return (

      <form className="commentForm" onSubmit={this.handleSubmit}>
      
      <Panel bsStyle="default"> 
          <label inline>LED indicator</label>        
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleToggleLED_OFF(taskobj) } >Off</Button>
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleToggleLED_ON(taskobj) } >On</Button>           
      </Panel>
     <Panel bsStyle="default"> 
          <label inline>SW1 (Output on D1 pin) </label>        
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW1_OFF(taskobj) } >Off</Button>
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW1_ON(taskobj) } >On</Button>           
      </Panel>
      <Panel bsStyle="default"> 
          <label inline>SW2 (Output on D2 pin) </label>        
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW2_OFF(taskobj) } >Off</Button>
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW2_ON(taskobj) } >On</Button>           
      </Panel>
      <Panel bsStyle="default"> 
          <label inline>SW3 (Output on D3 pin) </label>        
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW3_OFF(taskobj) } >Off</Button>
          <Button className="pull-right" type="button" bsStyle="default" bsSize="sm"
            onClick={() => this.handleSW3_ON(taskobj) } >On</Button>           
      </Panel>
      </form>
    );
  }
}

function mapStateToProps(state) {
 //  console.log("from mapstatetoprops - tasks" , state.taskState ); 
  return {    
    activedevice: state.activeDevice
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActions, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps  
)(DeviceTask)



