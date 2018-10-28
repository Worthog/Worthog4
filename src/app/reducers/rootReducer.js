import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import deviceReducer from '../../features/device/deviceReducer';
import blogReducer from '../../features/blog/blog-reducer';
import activeDeviceReducer from '../../features/device/activeDeviceReducer';
import postReducer from '../../features/gallery/postReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  test: testReducer,
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer,
  device: deviceReducer,
  blog: blogReducer,
  activeDevice: activeDeviceReducer,
  posts: postReducer
})

export default rootReducer