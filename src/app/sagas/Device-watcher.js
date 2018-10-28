import { takeLatest } from 'redux-saga/effects';
import {getDeviceSaga, getDevicebyIdSaga, addDeviceSaga, deleteDeviceSaga, updateDeviceSaga, setActiveDeviceSaga } from './DeviceSagas';
import * as types from '../constants/DeviceActionTypes';

export function* watchDevices() {
  yield* takeLatest(types.GET_DEVICES_REQUEST, getDeviceSaga);  
}

export function* watchAddDevice() {  
  yield* takeLatest(types.ADD_DEVICE_REQUEST, addDeviceSaga);
}

export function* watchDeleteDevice() {
  yield* takeLatest(types.DELETE_DEVICE_REQUEST, deleteDeviceSaga );
}

export function* watchDeviceUpdate() {
  yield* takeLatest(types.UPDATE_DEVICE_REQUEST, updateDeviceSaga);  
}

// watchDevicebyId  watchDevicebyId 

export function* watchDevicebyId() {
  yield* takeLatest(types.GET_DEVICE_REQUEST, getDevicebyIdSaga);  

  
}

export function* watchSetActiveDevice() {
  yield* takeLatest(types.SET_ACTIVE_DEVICE_REQUEST, setActiveDeviceSaga);  

  
}