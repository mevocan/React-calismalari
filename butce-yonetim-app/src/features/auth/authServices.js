import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const register = async (email, parola, kullaniciAd) => {
  const userResponse = await createUserWithEmailAndPassword(
    auth,
    email,
    parola
  );

  if (userResponse.user) {
    await updateProfile(userResponse.user, {
      displayName: kullaniciAd,
    });

    localStorage.setItem("user", JSON.stringify(userResponse.user));
  }
  return userResponse.user;
};

const login = async (email, parola) => {
  const userResponse = await signInWithEmailAndPassword(auth, email, parola);

  if (userResponse.user) {
    localStorage.setItem("user", JSON.stringify(userResponse.user));
  }
  return userResponse.user;
};

const logout=async()=>{
  await signOut(auth)
  localStorage.removeItem("user")
}

const authServices = {
  register,
  login,
  logout
};

export default authServices;
