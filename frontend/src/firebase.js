// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA1dUeAR9kL9vEfLTustlYF1IniptFNuA0",
//   authDomain: "discussion-forum-f8bfe.firebaseapp.com",
//   projectId: "discussion-forum-f8bfe",
//   storageBucket: "discussion-forum-f8bfe.appspot.com",
//   messagingSenderId: "743593540660",
//   appId: "1:743593540660:web:2fe76d2ed492658053de61",
//   measurementId: "G-LT4ZRN7MGV"
// };/

const firebaseConfig = {
  apiKey: "AIzaSyDR3tlOsaFavbVl_5A2f7EGEO8d1xS5CH4",
  authDomain: "campusqueries-d1960.firebaseapp.com",
  projectId: "campusqueries-d1960",
  storageBucket: "campusqueries-d1960.firebasestorage.app",
  messagingSenderId: "1087797206967",
  appId: "1:1087797206967:web:b1f16d2e3842de17471232",
  measurementId: "G-F7J3PGS7F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}