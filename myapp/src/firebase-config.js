// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCta7aZrnxC0_so5mciXO3W85af73QQC30",
  authDomain: "proj-01-fae79.firebaseapp.com",
  projectId: "proj-01-fae79",
  storageBucket: "proj-01-fae79.appspot.com",
  messagingSenderId: "916508179021",
  appId: "1:916508179021:web:af5bddbdfa617d7e7dfa04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);