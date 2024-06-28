// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "notes-app-411ea.firebaseapp.com",
  projectId: "notes-app-411ea",
  storageBucket: "notes-app-411ea.appspot.com",
  messagingSenderId: "432574143037",
  appId: "1:432574143037:web:2aa2d78570b44940bc6854",
  measurementId: "G-G0R9YSL6NT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);