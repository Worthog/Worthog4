import { toastr } from 'react-redux-toastr';
// import { FETCH_EVENTS } from './deviceConstants';
// import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
// import { createNewEvent } from '../../app/common/util/helpers';
// import moment from 'moment';
// import firebase from '../../app/config/firebase';
// import compareAsc from 'date-fns/compare_asc';
import * as types from '../../../app/constants/TaskActionTypes';


export const taskRequest = (device, task, arg) => {  
  return {
    type: types.TASK_REQUEST,
    device, task, arg
  };
};

export const taskRequestD1 = (device, task, arg) => {  
  return {
    type: types.TASK_REQUEST_SW1,
    device, task, arg
  };
};

export const taskRequestD0 = (device, task, arg) => {  
  return {
    type: types.TASK_REQUEST_D0,
    device, task, arg
  };
};

export const getTempRequest = (device, task) => {  
  return {
    type: types.TEMP_REQUEST,
    device, task
  };
};

