// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVa3wrH8kCimEnWkXwKtStDebHIXwCYJ4",
  authDomain: "central-supermarket.firebaseapp.com",
  projectId: "central-supermarket",
  storageBucket: "central-supermarket.appspot.com",
  messagingSenderId: "738354496092",
  appId: "1:738354496092:web:1094ba8a2c760ba9641c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;