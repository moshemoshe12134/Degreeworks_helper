import React from 'react'
import '../login.css'

function Login() {

  const changeSite = () =>{
    window.location = '/main'
  }

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
        <button onClick={changeSite} type="submit">Submit</button>
    </div>
  )
}

export default Login