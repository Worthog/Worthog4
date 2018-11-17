import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withFirestore } from 'react-redux-firebase';
import { Grid, Segment, Item, Checkbox, Button, Label, Icon, Dropdown } from 'semantic-ui-react';
import * as TaskActions from './taskActions';

// lets remove mapstate and replace it with mapstatetoprops
// if we have reached this page then active device state must be set.  
// get the device info from ActiveDeviceState



const timerOptions = [
     {
     key: 1,  
     text: '3 Seconds',
     value: 3
     },
     {
      key: 2, 
      text: '10 Minutes',
      value: 600
      },
     {
      key: 3, 
      text: '30 Minutes',
      value: 1800
      },
      {
       key: 4,
       text: '60 Minutes',
       value: 3600
      }
     ]

function mapStateToProps(state, ownProps) {

  // const deviceId = ownProps.match.params.id;
  // let deviceObject = {}; 
  // if (deviceId && state.blog.blogs.length > 0) {
  //   blogObject = state.blog.blogs.filter(i => i.id === blogId)[0];
  // }
  return {   
	  device: state.activeDevice,
    loading: state.blog.loading, 
    
  }
}



// const mapState = (state, ownProps) => {
//   let device = {};

//   if (state.firestore.ordered.devices && state.firestore.ordered.devices[0]) {
//     device = state.firestore.ordered.devices[0];
//   }

//   return {
//     initialValues: device,
//     device,
//     loading: state.async.loading
//   };
// };



class DeviceTasks extends Component {

  // state = {}

  state = {   
    value: 0
  }

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`devices/${match.params.id}`);
    
  }
  
  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`devices/${match.params.id}`);
  }

  
handleGetTemp = (device) => {
    console.log ("from handlegettemp : device= ", device) ;    
    const task = "tempvalue"      
    this.props.actions.getTempRequest(device, task); 
    
  } 

  tick() {
      const device = this.props.device; 
      var d = new Date();
      var timestr = d.toLocaleTimeString() ;
      // let deviceName = this.props.device.name ; 
      let deviceName = device.name ; 
      console.log( "Timer function fired @ ", timestr , "device = " , deviceName ) ;
      const task = "tempvalue"      
      this.props.actions.getTempRequest(device, task); 
      
  }

  //  from stackoverflow example : this.intervalId = setInterval(() => this.loadData(), 3600000);
  handle_Interval = (device, arg) => {       
    
    let timer = null;

    if (arg === 'on') {
      let interval = this.state.value * 1000 ; 
      // alert("turn ON interval set to " + interval ); 
      // var myTimer = setInterval( timerSet, 3000);
      // this.state.timer = setInterval(setTimer(), 3000);
      this.timer = setInterval(
        () => this.tick(), interval );
    }
    else
    {
      // alert("turn OFF interval"); 
      console.log("clear Interval" ); 
      // debugger;
      clearInterval(this.timer); 

    }; 

    const task = "sw1"  
    this.props.actions.taskRequest(device, task, arg);     
  }  


  //  this.callFunction("sw1", "on", "" );   
  handle_sw1 = (device, arg) => {       
    const task = "sw1"  
    this.props.actions.taskRequest(device, task, arg);     
  }  
 
  handle_sw2 = (device, arg) => {       
    const task = "sw2"  
    this.props.actions.taskRequest(device, task, arg);     
  }  

  handle_sw3 = (device, arg) => {       
    const task = "sw3"  
    this.props.actions.taskRequest(device, task, arg);     
  } 

  handle_LED = (device, arg) => {    
    const task = "led"  
    this.props.actions.taskRequest(device, task, arg);     
  }  

  handleDropDown = (e, {value} ) => {
    console.log ("from dropdown : value= ", value) ;    
    this.setState({ value }); 
    // const task = "tempvalue"  ;    
    //  this.props.actions.getTempRequest(device, task); 
    
  }  

  render() {
    const { value } = this.state.value;
    const {device} = this.props
    console.log({device}) ;
    return (
      <Grid>
      <Grid.Column width={10}>
     
        <Segment>
          <Item.Group>
            <Item>             
              <Item.Content>
                <Item.Header>{device.name} Tasks </Item.Header>                                   
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
                     
       
        <Segment clearing>
        <p>The next step is set up the logging function to log the temp.</p>
        <Label>Set Interval</Label>
        
           <Dropdown 
             
            selection 
            onChange={this.handleDropDown}
            placeholder='Select Interval' 
            options={timerOptions} 
            value={value}
            />
          <Button onClick={() => this.handle_Interval (device, "on") } floated="right" >On</Button>      
          <Button onClick={() => this.handle_Interval (device, "off") } floated="right" >Off</Button> 
         
        <span>{device.memo}</span>            
        </Segment>
        <Segment>                
                <h4>Get Value (temp)</h4>  
                <Label as='a' tag>
                Temperature &#8451;  
                </Label>
                {device.temperature}
               
                 <Button onClick={() => this.handleGetTemp (device) } floated="right" >Value</Button>      
                 
             </Segment>
       
        <Segment>                
                <h4>function (D0) </h4>                 
                 <Checkbox toggle />  
                 <Icon color='yellow' name='lightbulb' size='large' />
                 <Button onClick={() => this.handle_LED (device, "on") } floated="right" >On</Button>      
                 <Button onClick={() => this.handle_LED (device, "off") } floated="right" >Off</Button>                        
             </Segment>
        <Segment>                
           <h4>functions (sw1) </h4>                 
            <Checkbox toggle />  
            <Button onClick={() => this.handle_sw1 (device, "on" ) } floated="right" >On</Button>      
            <Button onClick={() => this.handle_sw1 (device, "off" ) } floated="right" >Off</Button>              
        </Segment>
        <Segment>                
           <h4>functions (sw2) </h4>                 
            <Checkbox toggle />  
            <Button onClick={() => this.handle_sw2 (device, "on" ) } floated="right" >On</Button>      
            <Button onClick={() => this.handle_sw2 (device, "off" ) } floated="right" >Off</Button>              
        </Segment>   
        <Segment>                
           <h4>functions (sw3) </h4>                 
            <Checkbox toggle />  
            <Button onClick={() => this.handle_sw3 (device, "on" ) } floated="right" >On</Button>      
            <Button onClick={() => this.handle_sw3 (device, "off" ) } floated="right" >Off</Button>              
        </Segment>       
      <Segment>         
          
          <Button onClick={this.props.history.goBack} color="grey" content="Return" />
         

      </Segment>         
        </Grid.Column>
        <Grid.Column width={6}>
        <p>The ActiveDeviceReducer is working.  So, changing the state; for example Sw1=on should update the 
          local ActiveDeviceState.  Probably ovekill for now, but it's a good exercise for when things get a 
          little more complicated.  SW1_ON calls this.props.actions.taskRequest(device, task, arg); which 
          initiates the Task Actions with a TASK_REQUEST. The Task Saga "Yields" a 
          "TASK_SUCCESS" call. Set up the ActivedeviceReducer to watch for TASK_SUCCESS and update
          the ActiveDeviceState accordingly. 
        </p>
        <p> Tasksaga passes the device object to the reducer as the action.  Not sure how that will 
            merge with activeState. All we get back as a response is the return value (1 or 0).  
            The function/task is defined and therefore the target and so is the result, just not sure how to 
            translate that into updating the ActiveDeviceState.  Well...actually in the saga we know the name
             of the task and we know the argument.  Need to match the name i.e. "sw1" with the result and pass
             that to the ActiveDeviceState. TASK_SUCCESS should pass 'sw1' = 'on' to the state. 
       </p>
        <p>
          Getting the toggle button to work will require connecting it to the ActiveDevice State.
          Not ready to go through that aggrevation quite yet.  Lets simply add Two buttons an 'ON'
          and 'Off'.  NOTE!! the args are all LOWER case "on" or "off". 
          </p>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {      
      actions: bindActionCreators(TaskActions, dispatch)
  };
};


export default  withFirestore(
  connect(mapStateToProps, mapDispatchToProps )(DeviceTasks)
);
