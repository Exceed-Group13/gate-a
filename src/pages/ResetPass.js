import React from 'react'
import '../styles/ResetPass.css'
import Menu from "../components/Menu";

const Register = () => {
  return (
    <>
    <div className='reset'>
      <Menu menu1={"Manage"} menu2={"Password"} />
      <div className="register">
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
        <div className='wrapper'>
          <h1 className='setH1'>Reset Password</h1>
          <br/>
          <br/>
          <form className="form" method="post" >
            <input className='old-pass' placeholder="Old password"/>
            <input className='new-pass' placeholder="New Password"/>
            <br/>
            <br/>
            <input type="submit" class="submit" value="Change Password"/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
