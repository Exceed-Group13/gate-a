import React from 'react'
import '../styles/Register.css'

const Register = () => {
  return (
    <div className="register">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div class="wrapper">
        <h1>Reset Password</h1>
        <br/>

        <br/>
        <form class="form" method="post" >
          <input className='input-name' placeholder="Old password"/>
          <input className='input-pass' placeholder="New Password"/>
        <br/>
        <br/>
          <input type="submit" class="submit" value="Change Password"/>
        </form>
      </div>
    </div>
  )
}

export default Register