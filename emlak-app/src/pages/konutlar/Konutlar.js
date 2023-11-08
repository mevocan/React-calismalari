import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const konutlarLoader =async () =>{
    const res= await fetch("http://localhost:4000/konutlar")
    if(!res.ok){
        throw Error("veriler çekilirken hata oluştu")
    }
    return res.json()
}


export default function Konutlar() {
    const Konutlar=useLoaderData();

   

    return (
    <div className='konutlar'>
            {Konutlar&& Konutlar.map(konut=>(
                    <Link to={konut.id.toString()} key={konut.id}>
                        <p>{konut.baslik}</p>
                        <p>Konum:{konut.konum}</p>
                    </Link>
                ))}
    </div>
  )
}
