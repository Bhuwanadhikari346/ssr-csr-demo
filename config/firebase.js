// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkzARylcbabih93L4cwwUuYOCcBLPAyE",
  authDomain: "ssrcsrdemo.firebaseapp.com",
  projectId: "ssrcsrdemo",
  storageBucket: "ssrcsrdemo.appspot.com",
  messagingSenderId: "1097959879897",
  appId: "1:1097959879897:web:52910efd19684b1d547ac8",
  measurementId: "G-8TYGT55V07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
