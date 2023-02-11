import React, { useState, useEffect } from 'react'
import DurationPicker from 'react-duration-picker'
import '../styles/Profile.css'
import Menu from "../components/Menu";


function ProfilePage() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [data, setData] = useState(undefined)
    const [delay, setDelay] = useState(0)
    const URL = "https://ecourse.cpe.ku.ac.th/exceed13/home"
    
    
    function manageDelay(delay) {
      if (data) {
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
      }
    };
    
    useEffect(()=>{
      fetch(URL).then((response) => response.json()).then((response) => {
        setData(response.result);
        // console.log(response.result)
        // console.log(data)
        // console.log(data[0]["delay"] - Math.floor(data[0]["delay"] / 60) * 60, Math.floor(data[0]["delay"] / 60))
      })
    },[]);
    
    
const onDurationChange = (duration) => {
    const { h, m, s } = duration;
    const convertToMin = ((duration.minutes * 60) + duration.seconds)
    setMinutes(m)
    setSeconds(s)
    manageDelay(convertToMin)
    // console.log(typeof(convertToMin))
    // console.log(data[0]["delay"] - minutes * 60, Math.floor(data[0]["delay"] / 60))
  };
  
  function changeToSec() {
    return data[0]["delay"] % 60
  }
  function changeToMin() {
    return Math.floor(data[0]["delay"] / 60)
  }

    return data && (
    <div className="reset">
      <div>
            <Menu menu1={"Home"} menu2={"Password"} />
      </div>
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
      <div className="component">
        <br/>
        <br/>
        <h1 className="profile-text">Set Time</h1>
        <br/>
        <img className='profile-img' src='https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450'/>
        <br/>
        <br/>
        <form className="form" method="post" >
          {/* <input className='Old-Pass' placeholder="Name"/> */}
        <br/>
        <center>
        <DurationPicker
          onChange={(du) => onDurationChange(du)}
          initialDuration={{ minutes: changeToMin(), seconds: changeToSec() }}
          noHours
        />

        <br/>
        </center>

          {/* <input type="submit" className="submit" value="Submit" onClick={(du) => onDurationChange(du)}/> */}

        </form>
      </div>
    </div>
    )
}
export default ProfilePage
