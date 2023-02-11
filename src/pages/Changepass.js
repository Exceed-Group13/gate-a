// import React, { useState } from 'react'
// import Swal from 'sweetalert2'
// import '../styles/ResetPass.css'

// const Changepass = () => {
//   const [oldPassword, setOldPassword] = useState('')
//   const [newPassword, setNewPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(!"")

//     if (!oldPassword || !newPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please enter both the old password and the new password',
//       })
//       return
//     } else if (newPassword !== confirmPassword) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Oops...',
//         text: 'Please enter both password the same',
//       })
//     }
    
//     else {
//       Swal.fire({
//         icon: 'success',
//         title: 'Password Changed',
//         text: 'Your password has been successfully changed',
//       })
//     }
//   }
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import '../styles/ResetPass.css'

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
      return
    } else if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter both password the same',
      })
      return
    }
    
    // Check if old password is correct
    fetch('https://ecourse.cpe.ku.ac.th/exceed13/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        oldPassword: oldPassword
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Old password is correct, set new password
        fetch('https://ecourse.cpe.ku.ac.th/exceed13/reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            newPassword: newPassword
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            Swal.fire({
              icon: 'success',
              title: 'Password Changed',
              text: 'Your password has been successfully changed',
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to set new password',
            })
          }
        })
        .catch(error => {
          console.error(error)
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect old password',
        })
      }
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="register">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div className="wrapper">
        <h1 className='setH1'>Reset Password</h1>
        <br/>

        <br/>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <input 
            className='input-pass' 
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
            className='input-pass' 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        <br/>
        <br/>
          <input type="submit" className="submit" value="Change Password"/>
        </form>
      </div>
    </div>
  )
}

export default Changepass
