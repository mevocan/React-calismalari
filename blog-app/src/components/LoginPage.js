import { login } from "../actions/auth"
import React from "react"

export const LoginPage =() =>(
    <div >
        <button onClick={login}>Login</button>
    </div>
)
export default LoginPage