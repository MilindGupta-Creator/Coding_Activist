// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"; // Import Firestore
import firebase from "firebase/compat/app"; // Import Firebase app

const firebaseConfig = {
  apiKey: "AIzaSyBegkaVBpkSz2UWnespSWZdBBKJFN2-aiw",
  authDomain: "jobslist-e5b7c.firebaseapp.com",
  projectId: "jobslist-e5b7c",
  storageBucket: "jobslist-e5b7c.appspot.com",
  messagingSenderId: "173960589945",
  appId: "1:173960589945:web:02152081d5d640e1fedaa8",
  measurementId: "G-D7H1V1NM2Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);

export { db };
