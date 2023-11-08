import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6TJUqmae-rXf55XHQbGoihRrex5DonPA",
  authDomain: "react-redux-toolkit-fire-8a511.firebaseapp.com",
  projectId: "react-redux-toolkit-fire-8a511",
  storageBucket: "react-redux-toolkit-fire-8a511.appspot.com",
  messagingSenderId: "180031369245",
  appId: "1:180031369245:web:3f8fb023c39fd08d80d6f4"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const db=getFirestore(app)

export {auth,db}