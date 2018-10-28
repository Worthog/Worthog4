import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { bindActionCreators } from 'redux'
import * as DeviceActions from '../deviceActions';
import { Grid, Segment, Item, Checkbox, Button  } from 'semantic-ui-react';
import { Link } from 'react-router-dom' ;

// import DeviceListAttendee from './DeviceListAttendee'
// import format from 'date-fns/format'
// import { objectToArray } from '../../../app/common/util/helpers'
// import {particle} from 'particle-api-js' ;

const mapState = (state, ownProps) => {
  let device = {};

  if (state.firestore.ordered.devices && state.firestore.ordered.devices[0]) {
    device = state.firestore.ordered.devices[0];
  }

 //  console.log("Task Page State ", state.firestore); 
  return {
    initialValues: device,
    device,
    loading: state.async.loading
  };
};



class DeviceConnect extends Component {

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`devices/${match.params.id}`);
    // console.log("deviceForm did mount id : ", this.props.initialValues.id );
  }
  
  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`devices/${match.params.id}`);
  }
  

  handleConnect = device => () => {
    // console.log("Device Connect Device : ", device) ;
    // alert("call the API to get the device status and make this the active device.") ; 
    this.props.actions.setActiveDevice(device); 
    // const token = "9cd7cdfb3de7ee81d48d245c4832e8fc32c3545f" ;
    // const photonid = "22002a000647343339373536" 
  

    // var devicesPr = particle.getDevice({ photonid, token });

    // devicesPr.then(
    //   function(data){
    //     console.log('Device attrs retrieved successfully:', data);
    //   },
    //   function(err) {
    //     console.log('API call failed: ', err);
    //   }

    // );

  };
  
  handleConnectChange = (event) => {
    alert("you clicked the checkbox. ") ; 
      // let name = event.target.name
      // let value = event.target.value
      // console.log ({name});
      // console.log ({value});
  }

  render() {
    const {device} = this.props; 
    const value = "true"; 
    return (
    <Grid>
    <Grid.Column width={10}>
    <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>             
              <Item.Content>
                <Item.Header>{device.title} Connect</Item.Header>  
                
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      
        <Segment>
          <span>
           <b>Device : </b> {device.title}
           {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}	 
           <b>Firebase id : </b> {device.id}        
          </span>          
        </Segment>
        
        <Segment>
          <span>
           <b>Photon id : </b> {device.deviceid} 
           {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}	   
          
          </span>          
        </Segment>

        <Segment>
          <span>
          <b>Device Token : </b> {device.token}      
          </span>          
        </Segment>
        <Segment>
          <span>
          <b>Device on line : </b> True/False            
          </span>
        </Segment>
        <Segment clearing>
        <span>{device.memo}</span>          
        </Segment>
        <Segment>
          <span>
         <label>Connect to Device: </label>
       
         <Checkbox toggle checked={!!value} onChange={this.handleConnectChange} />
          </span>
        </Segment>
      <Segment>         
          <Button onClick={this.handleConnect(device)} color="blue" content= "Connect" />         
          <Button as={Link} to={`/task/${device.id}`} color="yellow"  content="Tasks" />   
          <Button onClick={this.props.history.goBack} color="grey" content="Return" />
      </Segment>
        </Segment.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <h4>Device Connect</h4>  
          <p>
          <del>Can't seem to get axios working for the photon API, we could carry on banging our heads against the desk or bite the bulllet
            and go with the photon-client-js version </del>
          Managed to get it working - not quite sure how? Perhaps because I passed a blank as the content and changed this to a "get" instead
          of a "post".  If the status is "online" - update the ACTIVE device state, otherwise return a warning that the device was not found. 
          From the response we should save "connected: true, "Functions Array", "last_heard (date/time)", IP address, "Status", Variables(Array).
          </p>
          <p>What do we get back if the device is not on-line></p>
         
          <p>Next step is invoking a function through the API, should be fun.
          </p>
          
          <p>Call the Photon API and return the Device Status.  If the device is connected
            make this the ActiveDevice and update the Active Device State. 
          </p>
          <p>What do we need here to pass to the actions to talk to the device and where will
            the data come from?  Passed through the props to this page?</p>

          <p>We have the Firestore data here, can we also use StateToProps to connect to the
            Active Device State.  Should we have another component for Active State?
            </p>

           <p>Getting an error from the API 
             Status code : 400
             invalid_request error_description	Malformed auth header
             </p> 

             <ul>
                <li>200 OK - API call successfully delivered to the device and executed.</li>
                <li>400 Bad Request - Your request is not understood by the device, or the requested subresource (variable/function) has not been exposed.</li>
                <li>401 Unauthorized - Your access token is not valid.</li>
                <li>403 Forbidden - Your access token is not authorized to interface with this device. </li>   
                <li>404 Not Found - The device you requested is not currently connected to the cloud.</li>
                <li>408 Timed Out - The cloud experienced a significant delay when trying to reach the device.</li>
                <li>429 Too Many Requests - You are either making requests too often or too many at the same time. Please slow down.</li>
                <li>500 Server errors - Fail whale. Something's wrong on our end.</li>
              </ul>
          </Grid.Column>
      </Grid>     
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // FetchBlog: (id) => dispatch( actions.getBlog(id) )
      actions: bindActionCreators(DeviceActions, dispatch)
  };
};


export default  withFirestore(
  connect(mapState, mapDispatchToProps)(DeviceConnect)
);
