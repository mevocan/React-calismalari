import React from 'react'
import { connect } from 'react-redux'
import {Route,Redirect} from "react-router-dom"
import Header from '../components/Header'

const PrivateRoute =({isAuthenticated,component: Component,...rest}) =>(
  <Route {...rest} component={(props)=>(
    isAuthenticated ? (
      <>
      <Header/>
      <Component {...props}/>
      </>
      ):(
        <Redirect to="/"/>
        )
  )}/>
  )

const mapStateToProps = (state) =>({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps) (PrivateRoute)