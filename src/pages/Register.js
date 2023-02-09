import React from 'react'
import '../styles/Register.css'

const Register = () => {
  return (
    <div className="register">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div class="wrapper">
        <h1>Register Key</h1>
        <br/>

        <br/>
        <form class="form" method="post" >
          <input type="text" class="name" placeholder="Key Name"/>
          <input type="email" class="email" placeholder="Key Password"/>
        <br/>
        <br/>
          <input type="submit" class="submit" value="Register"/>
        </form>
      </div>
    </div>
  )
}

export default Register