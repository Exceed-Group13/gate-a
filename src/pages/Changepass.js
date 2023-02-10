import React, { useState , useEffect, useRef } from 'react'

import Swal from 'sweetalert2'
import '../styles/Register.css'

const Changepass = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [data, setData] = useState(undefined)
  const URL = "https://ecourse.cpe.ku.ac.th/exceed13/home"

  const oldPasswordEl = useRef()
  const newPasswordEl = useRef()
  const confirmPasswordEl = useRef()

  function checkOldPassword(oldPassword,e){
    if ((e.target.value).length == 0 || e.target.value.charCodeAt((e.target.value).length-1) === 49 || e.target.value.charCodeAt((e.target.value).length-1) === 50 || e.target.value.charCodeAt((e.target.value).length-1) === 51) {
        setOldPassword(e.target.value)
    } else {
      setOldPassword(oldPassword)
    }
  }

  function checkNewPassword(newPassword,e){
    if ((e.target.value).length == 0 || e.target.value.charCodeAt((e.target.value).length-1) === 49 || e.target.value.charCodeAt((e.target.value).length-1) === 50 || e.target.value.charCodeAt((e.target.value).length-1) === 51) {
        setNewPassword(e.target.value)
    } else {
      setNewPassword(newPassword)
    }
  }

  function checkConfirmPassword(confirmPassword,e){
    if ((e.target.value).length == 0 || e.target.value.charCodeAt((e.target.value).length-1) === 49 || e.target.value.charCodeAt((e.target.value).length-1) === 50 || e.target.value.charCodeAt((e.target.value).length-1) === 51) {
        setConfirmPassword(e.target.value)
    } else {
      setConfirmPassword(confirmPassword)
    }
  }

  useEffect(()=>{
    fetch(URL).then((response) => response.json()).then((response) => {
      setData(response.result); 
      console.log(response)
      console.log(data)
    })
  })

  function manageKey(old, newpin) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        house_name: data[0]['house_name'],
        old_pin: [...old].map(str => {return parseInt(str, 10)}),
        new_pin: [...newpin].map(str => {return parseInt(str, 10)}),
      }),
    };

    fetch("https://ecourse.cpe.ku.ac.th/exceed13/resetpin", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!oldPasswordEl.current.value || !newPasswordEl.current.value || !confirmPasswordEl.current.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both the old password and the new password',
      })
    }
    else if (oldPasswordEl.current.value == newPasswordEl.current.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your new password cannot be the same as old password',
      })
    } 
    else {
      Swal.fire({
        icon: 'success',
        title: 'Password Changed',
        text: 'Your password has been successfully changed',
      })
    }
    if (oldPasswordEl.current.value == Number(data[0]['pin'].join(''))) {
      manageKey(oldPasswordEl.current.value, newPasswordEl.current.value)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Old Password',
        text: 'Please corrected your old password',
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
        <form class="form" method="post" onSubmit={(ev) => handleSubmit(ev)}>
          <input 
            className='input-name' 
            type="password"
            placeholder="Old password"
            value={oldPassword}
            onChange={(e) => checkOldPassword(oldPassword, e)}
            ref={oldPasswordEl}
            maxLength={3}
          />
          <input 
            className='input-pass' 
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => checkNewPassword(newPassword,e)}
            ref={newPasswordEl}
            maxLength={3}
          />
          <input 
            className='input-confirm' 
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => checkConfirmPassword(confirmPassword, e)}
            ref={confirmPasswordEl}
            maxLength={3}
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
