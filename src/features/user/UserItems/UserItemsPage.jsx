import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux'
import { toastr } from 'react-redux-toastr'

import UserDevices from './UserDevices'
import UserBrews from './UserBrews'
import { userDetailedQuery } from '../userQueries'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { getUserEvents } from '../userActions'

// import getuserDevices from ../userActions

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    events: state.events,
    devices: state.devices, 
    eventsLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting,
    
  }
}

const actions = {
      getUserEvents
}

// change getUserEvents to getUserDevices 


class UserItemsPage extends Component {

  async componentDidMount() {
    let user = await this.props.firestore.get(`users/${this.props.match.params.id}`);
    if (!user.exists) {
      toastr.error('Not found', 'This is not the user you are looking for')
      this.props.history.push('/error')
    }
    let events = await this.props.getUserEvents(this.props.userUid);
    console.log(events);
  }

  changeTab = (e, data) => {
    this.props.getUserEvents(this.props.userUid, data.activeIndex)
  }

// get the devices from firebase and poulate the userdevices list, see the events props 

  render() {
    const { match, requesting, events, eventsLoading } = this.props;
   
    const loading = requesting[`users/${match.params.id}`]
  
    if (loading) return <LoadingComponent inverted={true}/>
    return (
      <Grid>
        <UserBrews changeTab={this.changeTab} events={events} eventsLoading={eventsLoading}/>
        <UserDevices changeTab={this.changeTab} events={events} eventsLoading={eventsLoading}/>
      </Grid>
    );
  }
}

export default compose(
  connect(mapState, actions),
  firestoreConnect((auth, userUid, match) => userDetailedQuery(auth, userUid, match)),
)(UserItemsPage);
