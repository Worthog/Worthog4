import axios from 'axios';

export function getAllTasks() {
  return axios.get('http://localhost:3000/api/tasks/all').then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
    console.log("error in task-api getallTasks");
  });
}


export function getTasks(filter) {
  return axios.get('http://localhost:3000/api/tasks/' + filter).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function addTask(text) {
  return axios.post('http://localhost:3000/api/tasks', {
    text: text
  }).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function updateTask(id, task) {
 //  var id = task._id ; 
  console.log("from task-api updatetask id = ", id ) ;
  return axios.put('http://localhost:3000/api/tasks/' + id, task).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

export function deleteTask(task) {
    console.log("from task-api deletetask  = ", task ) ;
  return axios.delete('http://localhost:3000/api/tasks/' + task._id, task).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

// note this is plaind id  NOT  _id  

export function getTask(id) {
  console.log("from task-api getTask by id = ", id ) ;
  return axios.get('http://localhost:3000/api/tasks/' + id).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}



export function addNewTask(task) {
  //  alert("api addnewtask") ;
  console.log("task-api from addnewtask : ", task ) ;
  return axios.post('http://localhost:3000/api/tasks/' , task).then(function(response) {
    return response.data;
  }).catch(function(err) {
    console.error(err);
  });
}

// task-api - getValue, since we have no control over the format of the data returned, update the original 
// task object with the new value and return the task.  

export function getValue(task) {
  //  alert("api addnewtask") ;
  console.log("task-api get value : ", task ) ;
  
  var config = {
        headers: {'Authorization': "Bearer " + task.token}
   };

  return axios.get('https://api.spark.io/v1/devices/' + task.deviceid + "/" + task.command ,  config ).then(function(response) {

   console.log("device response value: " , response.data ) ; 
   //   return response.data;
  //    return Object.assign({}, task, {
   //   value: response.data.result 
   // });
   return response.data.result ;

  }).catch(function(err) {
    console.error(err);
  });
}

