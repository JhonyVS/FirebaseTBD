// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5pGtX2OhGcIHU6NklKZ7zkbNu7eVhOnM",
  authDomain: "tallerbd-d1077.firebaseapp.com",
  projectId: "tallerbd-d1077",
  storageBucket: "tallerbd-d1077.appspot.com",
  messagingSenderId: "823248769449",
  appId: "1:823248769449:web:b9f5174106a00282ce34b8",
  measurementId: "G-KJTH8SE08N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);