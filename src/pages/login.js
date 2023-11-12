import React from 'react'
import '../login.css'
import '../styles.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div class="login-box">
      <h2>Login</h2>
        <form>
            <div class="user-box">
                <input type="text" name="" required=""></input>
                <label>Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required=""></input>
                <label>Password</label>
            </div>
        </form>
        <Link to="/main" className="login-button" >Login</Link>
    </div>
  )
}


export default Login
