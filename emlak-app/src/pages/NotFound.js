import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Sayfa Bulunamadı</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tenetur labore, quod, aliquam voluptatibus perspiciatis accusamus minus, officiis magnam ab nam dignissimos tempora adipisci eos est aspernatur aliquid neque repudiandae.</p>
        <p><NavLink to="/">Anasayfaya git</NavLink></p>
    </div>
  )
}
