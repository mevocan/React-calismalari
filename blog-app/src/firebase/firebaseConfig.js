// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVno4E3tD7ULx6AiW_EnDGABFteh3rS-g",
  authDomain: "react-blog-app-ae438.firebaseapp.com",
  databaseURL: "https://react-blog-app-ae438-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-ae438",
  storageBucket: "react-blog-app-ae438.appspot.com",
  messagingSenderId: "732802341212",
  appId: "1:732802341212:web:8091d3019eefcc146bc999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const googleAuthProvider = new GoogleAuthProvider();

export  {database as default , googleAuthProvider ,getDatabase}