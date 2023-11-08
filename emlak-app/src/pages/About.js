import React, { useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';

export default function About() {

  const [user,setUser]=useState("null");

  const [searchParams]=useSearchParams();

  const name = searchParams.get("name")

  if(!user){

    return <Navigate to="/" replace={true}/>
  }

  return (
    <div className='about'>
      {name && <p> Merhaba {name}</p>}
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati dolores architecto quos sint et, a minima dolorem voluptatibus distinctio voluptate cum alias dignissimos nostrum suscipit autem facilis consectetur sed.</p>
        <button onClick={()=>setUser(null)}>log out</button>

    </div>
  )
}
