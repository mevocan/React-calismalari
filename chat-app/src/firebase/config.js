import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyCVno4E3tD7ULx6AiW_EnDGABFteh3rS-g",
    authDomain: "react-blog-app-ae438.firebaseapp.com",
    databaseURL: "https://react-blog-app-ae438-default-rtdb.firebaseio.com",
    projectId: "react-blog-app-ae438",
    storageBucket: "react-blog-app-ae438.appspot.com",
    messagingSenderId: "732802341212",
    appId: "1:732802341212:web:003b65ac2548094c6bc999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage= getStorage(app)

export const db = getFirestore(app)