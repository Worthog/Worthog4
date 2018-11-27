import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' ;
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
// import { deleteEvent } from '../eventActions';
import DeviceList from './DeviceList/DeviceList';
import LoadingComponent from '../../app/layout/LoadingComponent';
// import EventActivity from '../EventActivity/EventActivity';

// ** Remove the delete event function 
// ** ALSO removed ACTIONS from mapstate

const mapState = state => ({
  devices: state.firestore.ordered.devices,
});

// const actions = {
//   deleteEvent
// };

class DeviceDashboard extends Component {
//   handleDeleteEvent = eventId => () => {
//     this.props.deleteEvent(eventId);
//   };

  render() {
    const { devices } = this.props;
    if (!isLoaded(devices) || isEmpty(devices)) return <LoadingComponent inverted={true} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <DeviceList devices={devices} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h4>Device-Container</h4>
          {/* <Button as={Link} to={`/device/stats`} color="grey"  content="Stats" />   */}
          <Button as={Link} to={`/addDevice`} color="grey"  content="Add Device" />  

          <h4>Oct 13</h4>  
          <p>Lets move the stats and demo buttons from the list item to this page. </p>
          <p>
             Add some new Task actions : Log_task_Request, Log_task_success, Log_task_fail and
             fetch_tasks.  Might want to change this to Log_Status and Fetch_Status. 
             
             Seems to be clearer and it won't interfere with the Task requests. 
             
             See the DeviceDashboard Page.  DeviceList Items calls "stats" from the button.
             This calls the TaskList component. Use the code from the DeviceDashboard to 
             map the state to the Firestore Tasks collection. 
            

          </p>
          <h4>ActiveDevice</h4>  
          <p>
             Convert the activeDeviceReducer to ES6 module version.  On connect assign device status to
             ActiveDevice State. Aftert comparing the various methods I think the Saga version "Orders.js"
             is the most concise and logical.  Lets convert ActiveDevicereducer to this method.
             

          </p>
          <p>
          <b>Note:</b> Installed the particle-api-js module, might make the function calls etc. easier to work with.
          
          </p>
          <p>
          Cannot get Axios to work, might have to switch to invoking the http methods by hand. 
          </p>
          <p>Before we fart around with fancy toggle buttons lets just wire up the connect 
            button to connect to the device.  Now we have to decide? Do we want to set up Saga and import 
            all the code & setup from the old version? Is this the direction we want to go in?  Apparently the 
            benefit to Saga is the testability.  Is it worth the effort?  Undecided!  Once again, pick a horset and
            ride it till it drops. The biggest benefit might come from importing the blog and the todo list, since these are already
            set up to use Saga.  Keep in mind you have the D:/react/revents version to fall back on
            if you get in too deep. 
          </p>
          <p> After adding a new device using the DeviceForm, the routing should
              return to the device list page instead of the events list page. 
              see DeviceForm - history push /devices</p>
            <p>Now we need to change the "view" button to a "Manage" button and allow the user to connect
                to the device. </p>
            <p>The form does not repopulate from "manage" button, perhaps it's getting the state by id instead 
                of device id? </p>
             <p>Changed the "devicelistItem" manage button to use "id" instead of deviceid and now the form is 
                 populating.  Guess the Router and the form ned to be in sync. </p>  

                           
            <p>Do not use a form for the Device Functions page. Forms post everything in one big batch.  I would
                rather have each function controlled individually, basically a list of components. </p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(
  firestoreConnect([{ collection: 'devices' }])(DeviceDashboard)
);
