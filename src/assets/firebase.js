// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_uxhFhagLWx-0wK0aL6vYLLiYHR-mR8w",
  authDomain: "cine-pilot.firebaseapp.com",
  projectId: "cine-pilot",
  storageBucket: "cine-pilot.firebasestorage.app",
  messagingSenderId: "145677621726",
  appId: "1:145677621726:web:2ea036b11e61d60ffde54f",
  measurementId: "G-PF6BV7Y5BR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export let auth = getAuth();
