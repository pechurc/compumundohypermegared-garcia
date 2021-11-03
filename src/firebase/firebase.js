// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDyBwuxWg4YveBwHflbbg4XuN3yJ6asc3o",

  authDomain: "compumundohypermegared-8e7ee.firebaseapp.com",

  projectId: "compumundohypermegared-8e7ee",

  storageBucket: "compumundohypermegared-8e7ee.appspot.com",

  messagingSenderId: "275936868831",

  appId: "1:275936868831:web:f0c51a01fbb316357eac6a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);