// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const confirmotp=(phoneNumber)=>{
  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size:'invisible'
  }, auth);

  recaptchaVerifier.render()
  return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
  
}     




export { auth, confirmotp };