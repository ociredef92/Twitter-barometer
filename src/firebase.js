import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCuA64RionO4YkwNmIobMicSsZj2UG_DOM",
    authDomain: "firstfirebaseapp-b7ae7.firebaseapp.com",
    databaseURL: "https://firstfirebaseapp-b7ae7.firebaseio.com",
    projectId: "firstfirebaseapp-b7ae7",
    storageBucket: "firstfirebaseapp-b7ae7.appspot.com",
    messagingSenderId: "858151906091",
    appId: "1:858151906091:web:03d96ec1c75072e3ab336e",
    measurementId: "G-K9J0G2KCGV"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase; // make firebase available to all the files where we import firebase