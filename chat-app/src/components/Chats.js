import React from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase/config";
import { useContext, useState, useEffect } from "react";

export default function Chats() {
  const [chats, setChats] = useState([]);
  const { girisKullanici } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "kullaniciChatler", girisKullanici.uid),
        (doc) => {
          setChats(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    girisKullanici.uid && getChats();
  }, [girisKullanici.uid]);

  console.log(chats);

  return (
    <div className="chats">
      {Object.entries(chats)?.map(chat=>(
          <div className="userChat" key={chat[0]}>
        <img
          src={chat[1].kullaniciBilgi.fotoURL}
          alt=""
        />
        <div className="userChatInfo">
          <span>{chat[1].kullaniciBilgi.kullaniciAd}</span>
          <p>{chat[1].sonMesaj?.text}</p>
        </div>
      </div>
        ))}
    </div>
  );
}
