import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Register() {
  const [hata, setHata] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const parola = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, parola);
      navigate("/");
    } catch (error) {
      setHata(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Aos Chat Uygulaması</span>
        <span className="title">Giriş Sayfası</span>
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Email adresiniz" />
          <input type="password" required placeholder="Parolanız" />
          <button>Giriş Yap</button>
          {hata && <span>Hata oluştu</span>}
        </form>
        <p>
          Üyeliğiniz bulunmuyorsa <Link to="/register">Üye olunuz</Link>
        </p>
      </div>
    </div>
  );
}
