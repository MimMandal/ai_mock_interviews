// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjWfBo8W5oEDBfrb7G8CgI8gIGTHSWUFM",
    authDomain: "prepwise-fc662.firebaseapp.com",
    projectId: "prepwise-fc662",
    storageBucket: "prepwise-fc662.firebasestorage.app",
    messagingSenderId: "766779930510",
    appId: "1:766779930510:web:b4c4d5f19e7b5a4dd5d6df",
    measurementId: "G-7PQVH3WVKR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);