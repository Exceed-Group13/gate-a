import React, { useState } from 'react'
import Swal from 'sweetalert2'
import '../styles/Register.css'

const Changepass = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!oldPassword || !newPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both the old password and the new password',
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Password Changed',
        text: 'Your password has been successfully changed',
      })
    }
  }

  return (
    <div className="register">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div class="wrapper">
        <h1>Reset Password</h1>
        <br/>

        <br/>
        <form class="form" method="post" onSubmit={handleSubmit}>
          <input 
            className='input-name' 
            placeholder="Old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input 
            className='input-pass' 
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input 
            className='input-confirm' 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        <br/>
        <br/>
          <input type="submit" class="submit" value="Change Password"/>
        </form>
      </div>
    </div>
  )
}

export default Changepass
