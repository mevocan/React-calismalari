import React, { useState } from "react";
import Add from "../img/addavatar.png";
import { auth, storage,db} from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc,setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [hata, setHata] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setYukleniyor(true);
    setHata(false)

    const kullanıcıad = e.target[0].value;
    const email = e.target[1].value;
    const parola = e.target[2].value;
    const avatar = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, parola);

      const date = new Date().getTime;

      const storageRef = ref(storage, `${kullanıcıad + date}`);
      console.log(storageRef);

      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (dowloadUrl) => {
          try {
            await updateProfile(res.user, {
              displayName: kullanıcıad,
              photoURL: dowloadUrl,
            });

            await setDoc(doc(db,"kullanicilar",res.user.uid),{
              uid:res.user.uid,
              kullanıcıad,
              email,
              fotoUrl:dowloadUrl

            })

            await setDoc(doc(db,"kullanicilarChat",res.user.uid),{})
            navigate("/")

          } catch (error) {
            setHata(error.message);
            setYukleniyor(false);
          }
        });
      });
      setYukleniyor(false);
    } catch (e) {
      setHata(e.message);
      setYukleniyor(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Aos Chat Uygulaması</span>
        <span className="title">Üye Ol Sayfası</span>
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Kullanıcı adınız" />
          <input type="text" required placeholder="Email adresiniz" />
          <input type="password" required placeholder="Parolanız" />
          <input type="file" id="file" required style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Avatar ekle</span>
          </label>
          <button disabled={yukleniyor}>Üye Ol</button>
          {yukleniyor && <span>Üyelik oluşurken bekleyiniz</span>}
          {hata && <p>{hata}</p>}
        </form>
        {!yukleniyor && (
          <p>
            Üyeliğiniz varsa <Link to="/login">Giris Yapınız</Link>
          </p>
        )}
      </div>
    </div>
  );
}
