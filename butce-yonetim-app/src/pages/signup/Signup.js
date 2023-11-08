import { useState,useEffect } from 'react'
import styles from './Signup.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isLoading,isError,isSuccess,message}=useSelector((state=>state.auth))

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userData={
      email,
      password,
      displayName
    }

    dispatch(register(userData))
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

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Üye Olma Sayfası</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Parola:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <label>
        <span>Kullanıcı Ad:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <button className="btn">Üye Ol</button>
    </form>
  )
}