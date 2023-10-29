import React from 'react'
import '../login.css'

function Login() {
//import html code here and be able to diplay it
//after be able to take input and save login info for next screen which will be the main page
//dont worry about functionality just the basic outline next

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
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login