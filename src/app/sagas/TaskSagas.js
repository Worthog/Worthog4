import { put, call } from 'redux-saga/effects';

import { taskRequest, valueRequest, vitalsRequest } from '../../api/photon-api';
import { logTask, logValue } from '../../api/firestore-api';
import * as types from '../constants/TaskActionTypes';

export function* tempRequestSaga({ device,task }) {
  // console.log("from taskRequestSaga : ", device) ;
 try {  
     const response = yield call(valueRequest, device, task );
     console.log("tempRequest response = ", response.data); 
     let temp = response.data.result ;
     console.log("temp = ", temp);
     let temp_celsius = (((temp * 3.3) / 4095) - 0.5) * 100 ; 

   yield call(logValue, device, task, temp_celsius );    
   yield put({type: types.TEMP_SUCCESS, temp_celsius });
      
 } catch (error) {
   yield put({ type: types.TEMP_FAIL , error });
 }
}


export function* taskRequestSaga({ device,task, arg }) {
  // console.log("from taskRequestSaga : ", device) ;
 try {  
     const response = yield call(taskRequest, device, task, arg );
     console.log("taskRequest response = ", response.data); 
       
   yield call(logTask, device, task, arg );  

   yield put({type: types.TASK_SUCCESS, device });
   
   if (response.data.return_value === 1 ){
      yield put({type: types.TASK_SW1_ON, device }) ;
   }; 
   if (response.data.return_value === 0 ){
    yield put({type: types.TASK_SW1_OFF, device }) ;
   }; 
   
 } catch (error) {
   yield put({ type: types.TASK_FAIL , error });
 }
}

export function* taskRequestSw1Saga({ device,task, arg }) {
  // console.log("from taskRequestSaga : ", device) ;
 try {  
     const response = yield call(taskRequest, device, task, arg );
     console.log("taskRequest response = ", response.data); 
     
   yield put({type: types.TASK_SUCCESS, device });
   
   if (response.data.return_value === 1 ){
      yield put({type: types.TASK_SW1_ON, device }) ;
   }; 
   if (response.data.return_value === 0 ){
    yield put({type: types.TASK_SW1_OFF, device }) ;
   }; 
   
 } catch (error) {
   yield put({ type: types.TASK_FAIL , error });
 }
}

export function* taskRequestD0Saga({ device,task, arg }) {
  // console.log("from taskRequestSaga : ", device) ;
 try {  
     const response = yield call(taskRequest, device, task, arg );
     console.log("D0 Saga  device = ", device); 
     console.log("D0 Saga  task = ", task ); 
   yield put({type: types.TASK_SUCCESS, device });
   
   if (response.data.return_value === 1 ){
      yield put({type: types.TASK_D0_ON, device }) ;
   }; 
   if (response.data.return_value === 0 ){
    yield put({type: types.TASK_D0_OFF, device }) ;
   }; 
   
 } catch (error) {
   yield put({ type: types.TASK_FAIL , error });
 }
}


export function* vitalsRequestSaga({ device, task }) {
  
 try {  
     const response = yield call(vitalsRequest, device );
     console.log("vitalsRequest response = ", response.data); 
       
     yield call( logTask, device );  

  // yield put({type: types.TASK_SUCCESS, device });
   
     
 } catch (error) {
   yield put({ type: types.TASK_FAIL , error });
 }
}