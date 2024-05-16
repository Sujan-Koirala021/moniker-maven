import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <div className="reg">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder='User Name' />
          <input required type="email" placeholder='Email' />

          <input required type="password" placeholder='Password' />
          <button type='submit'>Login</button>
          <p>An error occured!</p>

          <div className="reg-prompt">Already have account? <Link to='/login' >Login</Link></div>
        </form>
      </div>

    </>
  )
}
