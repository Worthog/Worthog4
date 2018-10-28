import axios from 'axios';


export function getVariable(variableName, deviceid, token, callback) {

  const URL="https://api.particle.io/v1/devices/" ;
  let myHttpRequest = new XMLHttpRequest(); 
  if (variableName === undefined) {
    variableName = "";
    }
  if(variableName===""){
    this.lastRequestType="Status";

  let url = URL+deviceid+"/"+variableName;
  myHttpRequest.open("GET", url, true); 
  myHttpRequest.setRequestHeader("Authorization","Bearer "+token);  //Pass the access Token as a header value.
  myHttpRequest.send(null); 
}

}
// task-api - getValue, since we have no control over the format of the data returned, update the original 
// task object with the new value and return the task.  

export function getStatus(device) {
  
  const token = device.token ;
  const photonid = device.deviceid ;

  axios.defaults.headers.common = {'Authorization': "Bearer " + token}; 

  return axios.get('https://api.particle.io/v1/devices/' + photonid + "/ " ).then(function(response) {
  console.log("device response value: " , response.data ) ; 
  return response ;

  }).catch(function(err) {
    console.error(err);
  });
}

export function taskRequest(device, task, arg) {
  
  const token = device.token ;
  const photonid = device.deviceid ;
  const params="args=" + arg;    
  axios.defaults.headers.common = {'Authorization': "Bearer " + token}; 

  return axios.post('https://api.particle.io/v1/devices/' + photonid + "/" + task , params ).then(function(response) {
  // console.log("device response value: " , response.data ) ; 
  return response ;

  }).catch(function(err) {
    console.error(err);
  });
}

export function valueRequest(device, task) {
  
  const token = device.token ;
  const photonid = device.deviceid ;
  
  axios.defaults.headers.common = {'Authorization': "Bearer " + token}; 

  return axios.get('https://api.particle.io/v1/devices/' + photonid + "/" + task ).then(function(response) {
  // console.log("device response value: " , response.data ) ; 
  return response ;

  }).catch(function(err) {
    console.error(err);
  });
}