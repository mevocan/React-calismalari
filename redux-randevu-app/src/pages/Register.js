import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {register,reset} from '../../src/features/auth/authSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

export default function Register() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const{user,isLoading,isSuccess,isError,message}=useSelector((state)=>state.auth)

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
    kullaniciAd: "",
    parolaKontrol: "",
  });

  const { email, parola, parolaKontrol, kullaniciAd } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(parola!==parolaKontrol){
      toast.warning("parolalar eşleşmedi")
    }else{
      const userData={
        email,
        parola,
        kullaniciAd
      }
      dispatch(register(userData))
    }
     
  };

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate("/")
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <section className="heading">
        <h1>Üyelik Oluştur</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" value={kullaniciAd} placeholder="Kullanıcı adınızı  giriniz" onChange={onChange} className="form-control" id="kullaniciAd" name="kullaniciAd" />
            </div>
            <div className="form-group">
                <input type="email" value={email} placeholder="Emailinizi giriniz" onChange={onChange} className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
                <input type="password" value={parola} placeholder="Parolanızı giriniz" onChange={onChange} className="form-control" id="parola" name="parola" />
            </div>
            <div className="form-group">
                <input type="password" value={parolaKontrol} placeholder="Parolanızı tekrar giriniz" onChange={onChange} className="form-control" id="parolaKontrol" name="parolaKontrol" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-blok">Üye ol</button>
            </div>
        </form>
      </section>
    </div>
  );
}
