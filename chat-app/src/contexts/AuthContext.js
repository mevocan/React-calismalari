import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [girisKullanici, setGirisKullanici] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (kullanici) => {
      setGirisKullanici(kullanici);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ girisKullanici }}>
      {children}
    </AuthContext.Provider>
  );
};
