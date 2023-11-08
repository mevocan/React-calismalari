import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'

export default function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Mesajınızı Yazınız'/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Gönder</button>
      </div>
    </div>
  )
}
