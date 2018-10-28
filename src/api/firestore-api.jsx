
// import { FETCH_EVENTS } from './deviceConstants';
// import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
// import { createNewEvent } from '../../app/common/util/helpers';
// import moment from 'moment';
// import firebase from '../../app/config/firebase';
// import compareAsc from 'date-fns/compare_asc';
// import * as types from '../../app/constants/DeviceActionTypes';
// ** The revents version calls a function in util/helpers to create the event
// swapped this for a local function "createNewDevice" 
// import { withFirestore } from 'react-redux-firebase';

import firebase from 'firebase';


export const createNewTask = ( device, task, arg) => {
  return {
  ...device,
    task, 
    arg: arg,
    updated: Date.now()
  }
}


export const logTask = (device, task, arg) => {

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

  let newTask = createNewTask(device, task, arg)  ;
  // console.log( {newTask}, "<-- the new task object") ;

// Add a new document with a generated id.
db.collection("tasks").add(newTask)
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
};



export const createNewValue = ( device, task, value) => {
  return {
  ...device,
    task, 
    value: value,
    updated: Date.now()
  }
}

export const logValue = (device, task, value) => {

  var db = firebase.firestore(); 
  db.settings({
    timestampsInSnapshots: true
  });
  
  let newValue = createNewValue(device, task, value)  ;
  console.log( {newValue}, "<-- the new Value object") ;  
  db.collection("tasks").add(newValue)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
  };
  