import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCRAYf4c3T752iAlzckyPu39GUg4Joid4",
    authDomain: "marioplan-2c072.firebaseapp.com",
    databaseURL: "https://marioplan-2c072.firebaseio.com",
    projectId: "marioplan-2c072",
    storageBucket: "marioplan-2c072.appspot.com",
    messagingSenderId: "726248164701",
    appId: "1:726248164701:web:f4effa0a70d4c3ba66ecb4",
    measurementId: "G-6ZT51XW1V1"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;