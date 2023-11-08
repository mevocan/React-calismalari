import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export const contactAction= async({request})=>{
  const data= await request.formData()

  const veri={
    email:data.get("email"),
    mesaj:data.get("message")
  }

  if(veri.mesaj.length<10){
    return{error:"Mesajınız en az 10 karakter olmalı"}
  }

  return redirect("/")
}

export default function Contact() {
  const data = useActionData()
  return (
    <div className='contact'>
        <h3>BAğlantı kur</h3>
        <Form method='post' action="/help/contact">
            <label htmlFor="">
                <span>Email adresiniz</span>
                <input type="email" name="email" id="" required/>
            </label>
            <label htmlFor="">
                <span>Mesajınız</span>
                <textarea name="message" id="" required></textarea>
            </label>
            <button>Gönder</button>
            {data&& data.error&& <p>{data.error}</p>}
        </Form>
    </div>
  )
}
