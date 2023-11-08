import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHPn5tmTym3Q4KaeYaHpEpnOe1KdTKSG4",
  authDomain: "redux-toolkit-react.firebaseapp.com",
  projectId: "redux-toolkit-react",
  storageBucket: "redux-toolkit-react.appspot.com",
  messagingSenderId: "622546117889",
  appId: "1:622546117889:web:7d7e25416158c8e72c2700"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

export{
 auth,
 db
}