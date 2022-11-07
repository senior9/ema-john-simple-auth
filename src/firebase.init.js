// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZS_rgnSgPqrYnQOdEJPuAuGIWMhwusA",
  authDomain: "ema-john-simple-auth-3cb7c.firebaseapp.com",
  projectId: "ema-john-simple-auth-3cb7c",
  storageBucket: "ema-john-simple-auth-3cb7c.appspot.com",
  messagingSenderId: "133067915986",
  appId: "1:133067915986:web:336c753a140cb6f646630b",
  measurementId: "G-D6JV1Y0M2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;