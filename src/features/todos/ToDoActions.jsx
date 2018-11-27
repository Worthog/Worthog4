import { toastr } from 'react-redux-toastr';

import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';

import moment from 'moment';
import firebase from '../../app/config/firebase';

// import * as types from '../../app/constants/DeviceActionTypes';



export const createToDo = (todo) => {
  // let newdate = moment(device.date).toDate();
  // Date.now()
  // created: Date.now(),
  //updated: Date.now()

  // let timestampNow = firebase.firestore.now(); 
  const firestore = firebase.firestore();
  let timestampNow = moment(Date.now()).toDate();  
  return {
    ...todo,    
    created: timestampNow,
    updated: timestampNow
  }
}


export const addToDo = todo => {
  console.log({todo} , "from ToDoActions addToDo" );
 
    const firestore = firebase.firestore();
    let newToDo = createToDo(todo);
    newToDo.startdate = moment(todo.startdate).toDate(); 
    newToDo.enddate = moment(todo.enddate).toDate(); 
    console.log( {newToDo}, "<-- the new ToDo object") ;
    try {
     //  let createdToDo = await firestore.add(`ToDos`, newToDo);
      firestore.collection('ToDos').add(newToDo);  
      toastr.success('Success', 'ToDo Added');
    } catch (error) {
      console.log("Error", error) ;
      toastr.error('Oops', 'Something went wrong during AddToDo', error);
    }
  
};

export const updateToDo = todo => {
  const firestore = firebase.firestore();
  console.log( "UpdateToDo Action"); 
  // let deviceDocRef = firestore.collection('ToDos').doc(todo.id);
  // update the updated field with current date bafore saving
  todo.updated = moment(Date.now()).toDate();   

  let docRef = firestore.collection('ToDos').doc(todo.id) ;
  console.log("dRef in updateToDo = " , docRef ); 
  docRef.update(todo) ;
//   return 

 // await deviceDocRef.update(todo);
  // }
//  dispatch(asyncActionFinish());
  toastr.success('Success', 'ToDo updated');

  return async (dispatch, getState) => {
    // dispatch(asyncActionStart());
   // const firestore = firebase.firestore();
   // console.log({firestore}, "firestore object in updateToDo"); 
    // if (todo.updated !== getState().firestore.ordered.todos[0].date) {
    //   device.date = moment(device.date).toDate();
    //  }

  //   try {
      let deviceDocRef = firestore.collection('ToDos').doc(todo.id);
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
        await deviceDocRef.update(todo);
      // }
    //  dispatch(asyncActionFinish());
      toastr.success('Success', 'ToDo updated');
  //  } catch (error) {
  //    console.log(error);
  //    dispatch(asyncActionError());
  //    toastr.error('Oops', 'Something went wrong');
  //  }
  };
};


