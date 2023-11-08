import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function KonutHata() {
  
    const error= useRouteError();

    return (
    <div className='konut-hata'>
        <h2>HATA!!!</h2>
        <p>{error.message}</p>
        <Link to="/">Anasayfa</Link>
    </div>
  )
}
