import { toastr } from 'react-redux-toastr';
// import { FETCH_EVENTS } from './deviceConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
// import { createNewEvent } from '../../app/common/util/helpers';
import moment from 'moment';
import firebase from '../../app/config/firebase';
// import compareAsc from 'date-fns/compare_asc';
import * as types from '../../app/constants/DeviceActionTypes';
// ** The revents version calls a function in util/helpers to create the event
// swapped this for a local function "createNewDevice" 

export const createNewDevice = (user, photoURL, device) => {
  device.date = moment(device.date).toDate();
  return {
    ...device,
    userid: user.uid,
    username: user.displayName,    
    created: Date.now(),
    updated: Date.now(),
  }
}


export const createDevice = device => {
  console.log({device} , "from create Device" );
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newDevice = createNewDevice(user, photoURL, device);
    // console.log( {newDevice}, "<-- the new device object") ;
    try {
      let createdDevice = await firestore.add(`devices`, newDevice);
      console.log( {createdDevice}, "<-- the new device object") ;
      toastr.success('Success', 'Device was created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const updateDevice = device => {
  return async (dispatch, getState) => {
    dispatch(asyncActionStart());
    const firestore = firebase.firestore();
    console.log({firestore}, "firestore object in updateDevice"); 
    if (device.date !== getState().firestore.ordered.devices[0].date) {
      device.date = moment(device.date).toDate();
      }
    try {
      let deviceDocRef = firestore.collection('devices').doc(device.id);
      // let dateEqual = compareAsc(getState().firestore.ordered.events[0].date.toDate(), event.date);
      // if (dateEqual !== 0) {
      //   let batch = firestore.batch();
      //   await batch.update(eventDocRef, event);

      //   let eventAttendeeRef = firestore.collection('event_attendee');
      //   let eventAttendeeQuery = await eventAttendeeRef.where('eventId', '==', event.id);
      //   let eventAttendeeQuerySnap = await eventAttendeeQuery.get();

      //   for (let i = 0; i < eventAttendeeQuerySnap.docs.length; i++) {
      //     let eventAttendeeDocRef = await firestore.collection('event_attendee').doc(eventAttendeeQuerySnap.docs[i].id);
      //     await batch.update(eventAttendeeDocRef, {
      //       eventDate: event.date
      //     })
      //   }
      //   await batch.commit();
      // } else {
        await deviceDocRef.update(device);
      // }
      dispatch(asyncActionFinish());
      toastr.success('Success', 'Device was updated');
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const getActiveDevice = (id) => {  
  return {
    type: types.GET_ACTIVE_DEVICE_REQUEST,
    id
  };
};


export const updateActiveDevice = (id, device ) => {  
  return {
    type: types.UPDATE_ACTIVE_DEVICE_REQUEST,
    id, device 
  };
};

export const setActiveDevice = (device) => {  
  return {
    type: types.SET_ACTIVE_DEVICE_REQUEST,
    device
  };
};
