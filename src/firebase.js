// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import "firebase/compat/storage";

import { getStorage } from "firebase/compat/storage";
// Import the functions you need from the SDKs you need

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toasterror, toastsuccess } from './Components/Toaster';
import {Link} from 'react-router-dom'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);


const confirmotp=(phoneNumber)=>{
  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size:'invisible'
  }, auth);

  recaptchaVerifier.render()
  return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
  
}     

const signinemail=(email, password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      toastsuccess("Successfully signed in with email ✅")
    // 
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    toasterror('Incorrect credentials')
  });
}

const signupemail=(email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      signinemail(email,password)
      // ...
      
  })
  .catch((error) => {
      toasterror("Something went wrong or user already exists")
      // ..
  });
}


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

const db = firebase.firestore()

export { firebase as default, storage, auth, confirmotp, signinemail, signupemail, db }