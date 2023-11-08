import { getAuth, signInWithPopup, signOut } from "firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig";

export const login = () =>{
  const auth = getAuth();
  return signInWithPopup(auth,googleAuthProvider)
}

export const loginAction = (uid) =>({
  type:"LOGIN",
  uid
})

export const logout = () =>{
  return signOut(getAuth(),)
}

export const logoutAction = () =>({
  type: "LOGOUT"
})