import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHt2P3aR35s7YLS4t-Lk6ewvXpPM-W8gI",
    authDomain: "revents-6a702.firebaseapp.com",
    databaseURL: "https://revents-6a702.firebaseio.com",
    projectId: "revents-6a702",
    storageBucket: "revents-6a702.appspot.com",
    messagingSenderId: "503344706898"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;