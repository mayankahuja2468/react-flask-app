import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCB72GGK9XVPljcnWcAAY9ysNiEhKMJITg",
    authDomain: "login-ec6f3.firebaseapp.com",
    projectId: "login-ec6f3",
    storageBucket: "login-ec6f3.appspot.com",
    messagingSenderId: "18165485328",
    appId: "1:18165485328:web:279d2b29d1b74719a41f95"
  };
  // Initialize Firebase
  let fire;
  if (!firebase.apps.length) {
    fire = firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  export default fire;

  
  