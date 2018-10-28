import { fork, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../constants/BlogActionTypes';
import * as deviceTypes from '../constants/DeviceActionTypes';
import * as taskTypes from '../constants/TaskActionTypes';
import * as postTypes from '../constants/PostActionTypes';
import {newBlogSaga, getBlogsSaga, getBlogSaga, addBlogSaga, completeBlogSaga, editBlogSaga, deleteBlogSaga, updateBlogSaga } from './blogSagas';
// import {watchBlogs, watchAddBlog, watchCompleteBlog, watchEditBlog, watchDeleteBlog, watchBlog, watchNewBlog, watchBlogUpdate  } from './Blog-watcher';
import {getDeviceSaga, getDevicebyIdSaga, addDeviceSaga, deleteDeviceSaga, updateDeviceSaga, setActiveDeviceSaga } from './DeviceSagas';

import * as taskSaga from './TaskSagas';
import * as postSaga from './postSagas'; 

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_BLOGS_REQUEST, getBlogsSaga), 
    takeLatest(actionTypes.NEW_BLOG_REQUEST, newBlogSaga),  
    takeLatest(actionTypes.UPDATE_BLOG_REQUEST, updateBlogSaga),  
    takeLatest(deviceTypes.GET_DEVICES_REQUEST, getDeviceSaga), 
    takeLatest(deviceTypes.SET_ACTIVE_DEVICE_REQUEST, setActiveDeviceSaga),
    takeLatest(deviceTypes.GET_DEVICE_REQUEST, getDevicebyIdSaga),
    takeLatest(taskTypes.TASK_REQUEST, taskSaga.taskRequestSaga),
    takeLatest(taskTypes.TEMP_REQUEST, taskSaga.tempRequestSaga),    
    takeLatest(taskTypes.TASK_REQUEST_SW1, taskSaga.taskRequestSw1Saga),
    takeLatest(taskTypes.TASK_REQUEST_D0, taskSaga.taskRequestD0Saga),
    takeLatest(postTypes.GET_POSTS_REQUEST, postSaga.getPostsSaga)         
  ])
}

