import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA5Q7yBef_GggFLsgwGPcIMe9mJY0ertQ",
    authDomain: "transfernowapp.firebaseapp.com",
    projectId: "transfernowapp",
    storageBucket: "transfernowapp.appspot.com",
    messagingSenderId: "111216319973",
    appId: "1:111216319973:web:2016d5a45d2889566fa30c",
    measurementId: "G-M2MLDJYXFR"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };