import { collection, getDocs, query, where, getDoc,doc,updateDoc,serverTimestamp, setDoc} from 'firebase/firestore'
import React, { useState,useContext } from 'react'
import { db } from '../firebase/config'
import {AuthContext} from "../contexts/AuthContext"

export default function Search() {

  const [arananKullanici,setArananKullanici]=useState("")
  const [kullanici,setKullanici]=useState(null)
  const [hata,setHata]=useState(false)
  
  const {girisKullanici}= useContext(AuthContext)

  const handleAra=async()=>{
    const  q = query(collection(db,"kullanicilar"),where("kullaniciAd","==",arananKullanici))
 
   try{
    const querySnapshot =await getDocs(q)

    querySnapshot.forEach(doc=>{
      setKullanici(doc.data())
    })
  }catch(error){
    setHata(error)
  }
 }
 const handleKey=(e)=>{
  e.code==="Enter" && handleAra()
  }

  const handleSec =async()=>{
    const birlestirilmisId= girisKullanici.uid>kullanici.uid? girisKullanici.uid+kullanici.uid: kullanici.uid + girisKullanici.uid
    
    try {
      const res = await getDoc((db,"chatler",birlestirilmisId))

      if(!res.exists()){
        await setDoc(doc(db,"chatler",birlestirilmisId),{mesajlar:[]})

        await updateDoc(doc(db,"kullaniciChatler",girisKullanici.uid),{
          [birlestirilmisId+".kullaniciBilgi"]:{
            uid: kullanici.uid,
            kullaniciAd: kullanici.kullaniciAd,
            fotoUrl:kullanici.fotoUrl
          },
          [birlestirilmisId+".tarih"]:serverTimestamp()
        })

        await updateDoc(doc(db,"kullaniciChatler",kullanici.uid),{
          [birlestirilmisId+".kullaniciBilgi"]:{
            uid: girisKullanici.uid,
            kullaniciAd: girisKullanici.displayName,
            fotoUrl:girisKullanici.photoUrl
          },
          [birlestirilmisId+".tarih"]:serverTimestamp()
        })
      }

    } catch (error) {
      
    }
    setKullanici(null)
    setArananKullanici("")
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Kulanıcı ara' onKeyDown={handleKey} onChange={(e)=>setArananKullanici(e.target.value)} value={arananKullanici}/>
      </div>
      {hata&&<span>Kullanıcı bulunamadı</span>}
      {kullanici&& <div className="userChat" onClick={handleSec}>
        <img src={kullanici.fotoUrl} alt="" />
        <div className="userChatİnfo"><span>{kullanici.kullaniciAd}</span></div>
      </div>} 
    </div>
  )
}
