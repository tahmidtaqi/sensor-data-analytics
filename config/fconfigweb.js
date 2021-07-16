import firebase from 'firebase';
var firebaseConfig2 = {
    apiKey: "AIzaSyCMW58wargTLtEAGFvgI90Rp1Zjz_Ij2j8",
    authDomain: "sensordataanalytics-105a7.firebaseapp.com",
    databaseURL: "https://sensordataanalytics-105a7-default-rtdb.firebaseio.com/",
    projectId: "sensordataanalytics-105a7",
    storageBucket: "sensordataanalytics-105a7.appspot.com",
    messagingSenderId: "37696294805",
    appId: "1:37696294805:web:dd358d7eeb3f177fb4709c",
    measurementId: "G-NCZQ44S5BW"
  };
  try {
    firebase.initializeApp(firebaseConfig2);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fireconfig = firebase;
  export default fireconfig; 