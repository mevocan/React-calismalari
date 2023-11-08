import React, { useEffect, useState } from "react";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from '../components/Spinner'

export default function Login() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)

    const [formData,setFormData]=useState({
        email:"",
        parola:""
    })
    


    const {email,parola}=formData

    const onChange=(e)=>{

        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit=(e)=>{
        e.preventDefault()

       const userData={
        email,parola
      }
      dispatch(login(userData))

    }

    useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      if(isSuccess||user){
        navigate("/")
      }
      dispatch(reset())
    },[user,isError,isSuccess,message,navigate,dispatch])

    if(isLoading){
      return <Spinner/>
    }

  return (
    <>
      <section className="heading">
        <h1>Giriş Yapalım</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="email" value={email} placeholder="Emailinizi giriniz" onChange={onChange} className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
                <input type="password" value={parola} placeholder="Parolanızı giriniz" onChange={onChange} className="form-control" id="parola" name="parola" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-blok">Giriş</button>
            </div>
        </form>
      </section>
    </>
  );
}
