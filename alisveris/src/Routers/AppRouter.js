import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import NotFoundPage from '../Components/NotFoundPage'
import Header from '../Components/Header'
import Hakkimizda from '../Components/Hakkimizda'
import Indirimlikupon from '../Components/Indirimlikupon'
import Yardim from '../Components/Yardim'


const  AppRouter =( ) => {
 

  return (
    <BrowserRouter >
    <Header></Header>
      <div className="">
        <Routes>
          <Route path="/" element={ <HomePage/> } exact/>
          <Route path="*" element={ <NotFoundPage/> } exact/>
          <Route path="/hakkimizda" element={ <Hakkimizda/> } exact/>
          <Route path="/indirimlikupon" element={ <Indirimlikupon/> } exact/>
          <Route path="/yardim" element={ <Yardim/> } exact/>
        </Routes>
       </div>
    </BrowserRouter>
  )
}

export default AppRouter