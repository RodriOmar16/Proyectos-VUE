// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcNZ29yQWGe-HB5qM4K6Cjh7fGcw8gGtU",
  authDomain: "fir-app-1-12c31.firebaseapp.com",
  projectId: "fir-app-1-12c31",
  storageBucket: "fir-app-1-12c31.firebasestorage.app",
  messagingSenderId: "752979753650",
  appId: "1:752979753650:web:2770a2edc3dbc94558a7ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth }