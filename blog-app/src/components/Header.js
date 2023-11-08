import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { logout } from '../actions/auth'

const Header = () => {
  return (
    <header>
        <h1>Blog app</h1>
        <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
        <NavLink to="/create" activeClassName="active">Create</NavLink>
        <button onClick={logout}>Log Out</button>
    </header>
  )
}

export default Header