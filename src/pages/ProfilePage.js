import React, { useState } from 'react'
import DurationPicker from 'react-duration-picker'
import '../styles/Profile.css'



   

function ProfilePage( ) {

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    
const onDurationChange = duration => {
    const { _,  m, s } = duration;
    setMinutes(m)
    setSeconds(s)

  };

    return (
    <div className="reset">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div class="component">
        <br/>
        <br/>
        <h1 className="profile-text">Profile</h1>
        <br/>
        <img className='profile-img' src='https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450'/>

        <br/>
        <br/>
        <form class="form" method="post" >
          <input className='Old-Pass' placeholder="Name"/>
        <br/>
        <br/>
        <center>
        <DurationPicker
           onChange={onDurationChange}
           noHours
        />

        <br/>
        </center>

          <input type="submit" class="submit" value="Submit"/>

        </form>
      </div>
    </div>
    )
}
export default ProfilePage
