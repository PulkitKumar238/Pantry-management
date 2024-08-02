// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA18wa8IxkXMyNM7fW3aL58OiziJVhC0iM",
  authDomain: "pantry-tracker-6048c.firebaseapp.com",
  projectId: "pantry-tracker-6048c",
  storageBucket: "pantry-tracker-6048c.appspot.com",
  messagingSenderId: "235308341762",
  appId: "1:235308341762:web:5e0344ff7346d257c4251b",
  measurementId: "G-QXZ17Y4430",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const firestore = getFirestore(app);

export { firestore };
