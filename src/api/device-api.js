import axios from 'axios';

export function getAllDevices() {
  return axios.get('http://localhost:3000/api/devices/all').then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
    console.log("error in device-api getallDevices");
  });
}


export function getDevices(filter) {
  return axios.get('http://localhost:3000/api/devices/' + filter).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}


export function addDevice(device) {
  console.log("device-api from addDevice : ", device ) ;
  return axios.post('http://localhost:3000/api/devices', device ).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}


export function updateDevice(id, device) {
 //  var id = device._id ; 
  console.log("from device-api updatedevice id = ", id ) ;
  return axios.put('http://localhost:3000/api/devices/' + id, device).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function deleteDevice(device) {
    console.log("from device-api deletedevice  = ", device ) ;
  return axios.delete('http://localhost:3000/api/devices/' + device._id, device).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

// note this is plaind id  NOT  _id  

export function getDevicebyId(id) {
  console.log("from device-api getDevice by id = ", id ) ;
  return axios.get('http://localhost:3000/api/devices/' + id).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}



/* export function addNewDevice(device) {
  //  alert("api addnewdevice") ;
  console.log("device-api from addnewdevice : ", device ) ;
  return axios.post('http://localhost:3000/api/devices/' , device).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
} */

