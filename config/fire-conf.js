// config/fire-config.js
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrTuDVpj00zrwP31d0s8J9EYDxfWLHYTk",
  authDomain: "collectsensordata.firebaseapp.com",
  databaseURL: "https://collectsensordata-default-rtdb.firebaseio.com",
  projectId: "collectsensordata",
  storageBucket: "collectsensordata.appspot.com",
  messagingSenderId: "841407973883",
  appId: "1:841407973883:web:be7cf7140d23791a55635e",
  measurementId: "G-2KHZG6KRVP"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;