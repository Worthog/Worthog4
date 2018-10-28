// import initialState from './initialState';
import initialState from './initialActiveDevice';
import * as types from '../../app/constants/DeviceActionTypes';


var index = 0; 

export default function activedeviceReducer(state=initialState, action) {

  
  switch (action.type) {

    case types.GET_ACTIVE_DEVICE_SUCCESS:
        return Object.assign({}, state, { activedevice: action.device });

   
    case types.SET_ACTIVE_DEVICE_SUCCESS:
        console.log("from set_active_device REDUCER : " , action);
        console.log("from activeDevice reducer state = ", state) ;
        return Object.assign( {} , state, { 
           _id:  action.id            ,
           deviceid:  action.deviceid, 
           name: action.name,
           token: action.token,
           connected: "true" 
              });    



    case types.UPDATE_ACTIVE_DEVICE_SUCCESS:
        index = state.activedevice.findIndex((device) => device._id === action.device._id);
        console.log("UPDATE device index = ", index);        
        return Object.assign({}, state.activedevice, {
            devices: [
            ...state.activedevice.slice(0, index),
            Object.assign({}, state.activedevice[index], action.device._id ),
            ...state.activedevice.slice(index + 1)
        ]
        });
            
                
   case types.UPDATE_ACTIVE_DEVICE_SUCCESS:
        console.log("reducer update_activedevice_success", action.device ); 
        return Object.assign({}, state.activedevice, action.device );
				

    default:
      return state
  }
}
