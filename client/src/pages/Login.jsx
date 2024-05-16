import React from 'react'
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <>
    <div className="l">
      <h1>Login</h1>
      <form>
      <input required type="text" placeholder='Username'/>
      <input required type="password" placeholder='Password'/>
      <button type='submit'>Login</button>
      <p>An error occured!</p>
      <div className="reg-prompt">Don't have account? <Link to = '/register' >Register</Link></div>
      </form>
    </div>
    
    </>
  )
}
