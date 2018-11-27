import React, { Component } from 'react';
import { Grid, Segment, Item, Button, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' ;
import { bindActionCreators } from 'redux'
import * as TaskActions from '../DeviceTasks/taskActions';

import { withFirestore } from 'react-redux-firebase';
import ReactDOM from "react-dom";
import Chart from "react-google-charts";


import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';


import LoadingComponent from '../../../app/layout/LoadingComponent';

function mapStateToProps(state, ownProps) {

  return {   
	  device: state.activeDevice,
    loading: state.blog.loading, 
    
  }
}

function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}


const options = {
  width: 500,
  height: 200,
  redFrom: 40,
  redTo: 50,
  yellowFrom: 30,
  yellowTo: 40,
  minorTicks: 10,
  max: 50,
  majorTicks: [ 0, 10, 20, 30, 40, 50 ]
};

const getRandomNumber = () => {
  return Math.random() * 100;
};




class DeviceDashboard extends Component {

  state = {
    networkSpeed: 1,
    temp: 20,
    cpu: 55,
    lastupdate: ""
  };


  intervalID = null;

  getData = () => {
    let tempstr = "Temp" + String.fromCharCode(8451);
    return [
      ["Label", "Value"],
      [tempstr , this.state.temp],
      ["CPU", this.state.cpu],
      ["Network", this.state.networkSpeed]
    ];
  };

  handleGetTemp = (device) => {
    console.log ("from handlegettemp : device= ", device) ;    
    const task = "tempvalue"      
    this.props.actions.getTempRequest(device, task); 
   
      // var d = new Date();
      // var timestr = d.toLocaleTimeString() ;
      // let deviceName = this.props.device.name ; 
      let deviceName = device.name ; 
      let d = new Date(); 
      let timestr = d.toLocaleTimeString() ;

      console.log( "Timer function fired @ ", timestr , "device = " , deviceName ) ;
      this.setState(state => {
       
        return {
          ...state,
          networkSpeed: getRandomNumber(),
          cpu: getRandomNumber(),
          temp: this.props.device.temperature, 
          lastupdate : timestr
                    

        };
      });
      
  }


// lets try replacing  temp: getRandomNumber() with device.temperature
// try  let shorttemp = device.temperature.toFixed(2) ; 

async componentDidMount() {
  const {firestore, match} = this.props;
  var d = new Date();
  var timestr = d.toLocaleTimeString() ;
  await firestore.setListener(`device/dashboard/${match.params.id}`);
   this.intervalID = setInterval(() => {
      this.setState(state => {
        d = new Date(); 
        timestr = d.toLocaleTimeString() ;
        return {
          ...state,
          networkSpeed: getRandomNumber(),
          cpu: getRandomNumber(),
          temp: this.props.device.temperature, 
          lastupdate : timestr 

        };
      });
    }, 600000);
}


async componentWillUnmount() {
  const {firestore, match} = this.props;
  await firestore.unsetListener(`device/dashboard/${match.params.id}`);
  if (this.intervalID === null) return;
  clearInterval(this.intervalID);
}


  render() {
    
    const {device} = this.props
    console.log({device}) ;


    // let shorttemp = device.temperature.toFixed(2) ; 
   
    let shorttemp = "" ; 

    if (isNumber(device.temperature) && (device.temperature > 0) ) {
      shorttemp = device.temperature.toFixed(2) ; 
    } 
    else {
      shorttemp = "N/A" ;  
    }

    return (
      <Grid>
        <Grid.Column width={10}>
          {/* <DeviceList devices={devices} /> */}
          <Segment>
          <Item.Group>
            <Item>             
              <Item.Content>
                <Item.Header>{device.name} Dashboard </Item.Header>                                                 
              </Item.Content>
            </Item>
            <Item>             
              <Item.Content>                
                <Label as='a' tag>
                Temperature :  {shorttemp}  &#8451;                  
                </Label>
                
                {/* <Label as='a' tag>
                Temperature :  {this.state.temp.toFixed(2)}  &#8451;                  
                </Label>  */}


                Last Update @ {this.state.lastupdate}   
                <Button onClick={() => this.handleGetTemp (device) } 
            color="green"
            floated="right" >Refresh</Button>                                  
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>                
                <h4>Temperature &#8451; </h4>  
         
                <Chart
                  chartType="Gauge"
                  width="100%"
                  height="400px"
                  data={this.getData()}
                  options={options}
                />
                                                                            
             </Segment>             

      <Segment>                   
          <Button onClick={this.props.history.goBack} color="grey" content="Return" /> 
          
      </Segment>   


        </Grid.Column>
        <Grid.Column width={6}>
          <h4>DeviceDashboard Page</h4>
          <p>The conversion to shorttemp was working until I put the
            fixed function into the component mount, lets remove it for now</p>                   
          <h4>Google Gauge</h4>  
          <p>
             install react-google-charts from :
                        
             <a href=" https://react-google-charts.com/gauge-chart" target="_blank" rel="noopener noreferrer"> React Google Charts</a>
            

          </p>
          <p>
          <b>Note: </b> 
          Demo available at :    
          <a href="https://codesandbox.io/s/ykzvw2yv3z" target="_blank" rel="noopener noreferrer"> CodeSandBox Google Gauge</a>
                      
          </p>
         <p>
           Hey had to use  let tempstr = "Temp" + String.fromCharCode(8451); for the gauge
           title, but it worked.
           <br/>
           Could switch to  8457 if we want to show  &#8457;
           instead of &#8451;. 
          <br/>
          </p>
          <p>
           Could call the task Saga using the Action Request, the problem is it logs each request.
           I don't think that's what we want.  Might use it for now, but would be nice to have another
           Action, that simply gets the device value and updates the gauge.
           
          <br/>
          Where do we get the state?  MapStatetoprops - device
         
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
  connect(mapStateToProps, mapDispatchToProps )(DeviceDashboard)
);

