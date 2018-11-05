import { put, call } from 'redux-saga/effects';
import { getAllDevices, addDevice, updateDevice, deleteDevice  } from '../../api/device-api';
import { getStatus } from '../../api/photon-api';
import * as types from '../constants/DeviceActionTypes';
import { toastr } from 'react-redux-toastr';

export function* getDeviceSaga({ payload }) {
  try {  
    const devices = yield call(getAllDevices, payload);
    yield [      
      put({ type: types.GET_DEVICES_SUCCESS, devices }),
    ];
  } catch (error) {
    yield put({ type: types.GET_DEVICES_FAILURE , error });
  }
}


export function* addDeviceSaga({ device }) {
   try {  
    const newdevice = yield call(addDevice, device );
    yield [      
      put({ type: types.ADD_DEVICE_SUCCESS, newdevice }),
    ];
  } catch (error) {
    yield put({ type: 'ADD_DEVICE_FAILURE', error });
  }
}



export function* deleteDeviceSaga({ device }) {
   console.log("from deletedevicesaga call API deletedevice: ", device) ;
   var id = device._id;
   console.log("from deletedevicesaga call API with deletedevice id : ", id) ;
   try {  
    const newdevice = yield call(deleteDevice, device );
    yield [      
      put({ type: types.DELETE_DEVICE_SUCCESS, newdevice }),
    ];
  } catch (error) {
    yield put({ type: 'DELETE_DEVICE_FAILURE', error });
  }
}


export function* updateDeviceSaga({ id, device }) {
   // console.log("from updateDevicesaga call API updateDevice: ", device) ;
   // console.log("from updateDevicesaga id = ", id ) ;
   try {  
    const edDevice = yield call(updateDevice, id, device );
    yield [      
      put({ type: types.UPDATE_DEVICE_SUCCESS, edDevice }),
    ];
  } catch (error) {
    yield put({ type: 'UPDATE_DEVICE_FAILURE', error });
  }
}

 export function* getDevicebyIdSaga({ id }) {
//    console.log("from getDevicebyIdSaga call API getDevicebyId: ", id) ;
//   try {  
//     const devices = yield call(getDevicebyId, id);
//     yield [      
//       put({ type: types.GET_DEVICE_SUCCESS, device }),
//     ];
//   } catch (error) {
//     yield put({ type: types.GET_DEVICE_FAILURE , error });
//   }
 }

export function* setActiveDeviceSaga({ device }) {
  console.log("from setActiveDeviceSaga : ", device) ;
 try {  
     const response = yield call(getStatus, device);
     console.log("getStatus response = ", response.data); 
     toastr.success('Success', 'Device Connected');
     // alert("set this as the active device"); 
   yield [      
     put({ type: types.SET_ACTIVE_DEVICE_SUCCESS, device }),
   ];
 } catch (error) {
   yield put({ type: types.SET_ACTIVE_DEVICE_FAILURE , error });
   toastr.error('Oops', 'Something went wrong');
 }
}