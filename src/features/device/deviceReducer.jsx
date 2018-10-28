import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_DEVICE, DELETE_DEVICE, UPDATE_DEVICE, FETCH_DEVICES } from './deviceConstants';

 const initialState = [];

export const createdevice = (state, payload) => {
  return [...state, Object.assign({}, payload.device)]
}

export const updatedevice = (state, payload) => {
  return [
    ...state.filter(device => device.id !== payload.device.id),
    Object.assign({}, payload.device)
  ]
}

export const deletedevice = (state, payload) => {
  return [
    ...state.filter(device => device.id !== payload.deviceId)
  ]
}

export const fetchdevices = (state, payload) => {
  return payload.devices
}

export default createReducer(initialState, {
  [CREATE_DEVICE]: createdevice,
  [UPDATE_DEVICE]: updatedevice,
  [DELETE_DEVICE]: deletedevice,
  [FETCH_DEVICES]: fetchdevices
})