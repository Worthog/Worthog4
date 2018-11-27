import initialState from './initialActiveDevice';
import * as types from '../../app/constants/DeviceActionTypes';
import * as tasktypes from '../../app/constants/TaskActionTypes';


const getActiveDeviceSuccess = ( state, action ) => {
    return Object.assign({}, state, { activedevice: action.device });
};


const setActiveDeviceSuccess = (state, action) => {
console.log("from set_active_device REDUCER : " , action);
console.log("from activeDevice reducer state = ", state) ;
return Object.assign( {} , state,  {
   id:  action.device.id            ,
   deviceid:  action.device.deviceid, 
   name: action.device.title,
   token: action.device.token,
   connected: "true" 
      });    
    };

const updateActiveDeviceSuccess = ( state, action ) => {
  const index = state.activedevice.findIndex((device) => device._id === action.device._id);
  console.log("UPDATE device index = ", index);        
  return Object.assign({}, state.activedevice, {
      devices: [
      ...state.activedevice.slice(0, index),
      Object.assign({}, state.activedevice[index], action.device._id ),
      ...state.activedevice.slice(index + 1)
  ]     

    });
    
  };

const tempSuccess = (state, action) => {    
    console.log("ActiveDeviceReducer TEMP_SUCCESS = ", action) ;
    return Object.assign( {} , state,  {
       connected: "true" ,
       temperature: action.temp_celsius ,
       tempF :  (action.temp_celsius * 1.8) + 32      
          });    
        };




const taskD0On = (state, action) => {
   return Object.assign( {} , state,  {
    connected: "true" ,
    ledmain : "on"       
        });    
    };  

const taskD0Off = (state, action) => {
   return Object.assign( {} , state,  {
    connected: "true" ,
    ledmain : "off"       
        });    
    };  


    // note tasksaga is going to pass the device object as the action.  Not sure how that will 
// merge with activeState. All we get back as a response is the return value (1 or 0). 


  const taskSuccess = (state, action) => {
    console.log("from set_active_device REDUCER : " , action);
    console.log("from taskSuccess reducer state = ", state) ;
    return Object.assign( {} , state,  {
       connected: "true"        
          });    
        };


    const taskSw1On = (state, action) => {
            console.log("from set_active_device REDUCER : " , action);
            console.log("from taskSuccess reducer state = ", state) ;
            return Object.assign( {} , state,  {
               connected: "true" ,
               sw1 : "on"       
                  });    
                };
                
                const taskSw1Off = (state, action) => {
                    console.log("from set_active_device REDUCER : " , action);
                    console.log("from taskSuccess reducer state = ", state) ;
                    return Object.assign( {} , state,  {
                       connected: "true" ,
                       sw1 : "off"       
                          });    
                        };              
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.GET_ACTIVE_DEVICE_SUCCESS: return getActiveDeviceSuccess( state, action );
        case types.UPDATE_ACTIVE_DEVICE_SUCCESS: return updateActiveDeviceSuccess( state, action );
        case types.SET_ACTIVE_DEVICE_SUCCESS: return setActiveDeviceSuccess( state, action );
        case tasktypes.TASK_SUCCESS: return taskSuccess( state, action ) ;
        case tasktypes.TEMP_SUCCESS: return tempSuccess( state, action ) ;
        case tasktypes.TASK_SW1_ON: return taskSw1On( state, action ) ; 
        case tasktypes.TASK_SW1_OFF: return taskSw1Off( state, action ) ; 
        case tasktypes.TASK_D0_ON: return taskD0On( state, action ) ; 
        case tasktypes.TASK_D0_OFF: return taskD0Off( state, action ) ; 
        default: return state;
    }
};

export default reducer;