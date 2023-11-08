import React from 'react'
import { Outlet } from 'react-router-dom'

export default function KonutLayout() {
  return (
    <div className='konut-layout'>
        <h2>Konutlar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia quae sunt aspernatur animi atque reprehenderit consequatur, dolorem fuga nostrum, beatae, minima aperiam possimus? Perspiciatis minus impedit amet quod enim.</p>
        <Outlet/>
    </div>
  )
}
