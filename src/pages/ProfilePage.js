import React, { useState, useEffect } from 'react'
import DurationPicker from 'react-duration-picker'
import '../styles/Profile.css'
import Menu from "../components/Menu";


function ProfilePage() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [data, setData] = useState(undefined)
    const URL = "https://ecourse.cpe.ku.ac.th/exceed13/home"

    function manageDelay(delay) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          house_name: data[0]['house_name'],
          delay: delay
        }),
      };
  
      fetch("https://ecourse.cpe.ku.ac.th/exceed13/setting", requestOptions)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    };

    useEffect(()=>{
      fetch(URL).then((response) => response.json()).then((response) => {
        setData(response.result);
        console.log(response)
        console.log(data)
      })
    });

const onDurationChange = (duration) => {
    const { h, m, s } = duration;
    const convertToMin = ((duration.minutes * 60) + duration.seconds)
    setMinutes(m)
    setSeconds(s)
    manageDelay(convertToMin)
    // console.log(typeof(convertToMin))
  };

    return (
    <div className="reset">
      <div>
            <Menu menu1={"Home"} menu2={"Password"} />
      </div>
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div class="component">
        <br/>
        <br/>
        <h1 className="profile-text">Set Time</h1>
        <br/>
        <img className='profile-img' src='https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450'/>
        <br/>
        <br/>
        <form class="form" method="post" >
          {/* <input className='Old-Pass' placeholder="Name"/> */}
        <br/>
        <center>
        <DurationPicker
          initialDuration={{ minutes: 2, seconds: 3 }}
          noHours
        />

        <br/>
        </center>

          <input type="submit" class="submit" value="Submit" onClick={(du) => onDurationChange(du)}/>

        </form>
      </div>
    </div>
    )
}
export default ProfilePage
