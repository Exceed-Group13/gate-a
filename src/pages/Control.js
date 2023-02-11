import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import '../styles/Control.css'

let timer = ""
const Control = (props) => {
  const [controller, setController] = useState(false);
  const [data, setData] = useState(undefined)

  const URL = "https://ecourse.cpe.ku.ac.th/exceed13/home"
  
  useEffect(()=>{
    fetch(URL).then((response) => response.json()).then((response) => {
      setData(response.result); 
      console.log(response)
      console.log(data)
    })
  })
  
  useEffect(()=>{
    settingTime(1)

    return () => {
      settingTime(2)
    }
  },[])
  
  useEffect(() => {
    console.log(props.data)
    if (props.data) {
      setController(props.data.state);
      console.log(controller);
    }
  }, [props.data]);

  function settingTime(num) {
    if (num === 1){
      timer = setInterval(async () => {
        try {
          const response = await fetch(URL)
          const result = await response.json()
          console.log(result.result[0].alert)
          alertinvalidPassword(result.result[0].alert)
        }catch(err) {
          console.log(err)
        }
      },1000)
    }else {
      clearInterval(timer)
    }
  }

  function alertinvalidPassword(alert) {
    if (!alert){
      clearInterval(timer)
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter both Key Name and Key Password',
      }).then(() => {
        timer = setInterval(async () => {
          try {
            const response = await fetch(URL)
            const result = await response.json()
            console.log(result.result[0].alert)
            alertinvalidPassword(result.result[0].alert)
          }catch(err) {
            console.log(err)
          }
        },1000)
      })
    }
  }
  
  function manageSwitch(state, house) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: state,
        house_name: house,
      }),
    };

    fetch("https://ecourse.cpe.ku.ac.th/exceed13/home", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  // return data && (
  //   <>
  //   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
  //   <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
  //   <div className="demo">
  //           <Menu menu1={"Manage"} menu2={"Password"} />
  //       <div className="doorDiv">
  //         <h1 className={data[0]['state'] ? "open-text" : "close-text"}>{data[0]['state'] ? "Open" : "Close"}</h1>
  //       </div>
  //       <div className="switch-box">
  //           <Button className="switch-but" size="lg" variant="primary" onClick={() => manageSwitch("true", data[0]['house_name'])}>OPEN</Button>{' '}
  //           <Button className="switch-but" size="lg" variant="primary" onClick={() => manageSwitch("false", data[0]['house_name'])}>OFF</Button>{' '}
  //       </div>
  //     </div>
  //   </>
  // );
  return data && (
    <>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <div className="demo">
            <Menu menu1={"Manage"} menu2={"Password"} />
        <div className="doorDiv">
          <h1 className={data[0]['state'] ? "open-text" : "close-text"}>{data[0]['state'] ? "Open" : "Close"}</h1>
          {data[0]['state'] ? <img src="https://i.ibb.co/FqMKGR3/Untitled-design-2.png" alt="Open door" style={{width:'50%'}} /> : <img src="https://i.ibb.co/QMRV82x/Untitled-design-3.png" alt="Close door" style={{width:'50%'}}/>}
        </div>
        <div className="switch-box">
            <Button className="switch-but" style={{margin:'18px'}} size="lg" variant="primary" onClick={() => manageSwitch("true", data[0]['house_name'])}>OPEN</Button>{' '}
            <Button className="switch-but" size="lg" variant="primary" onClick={() => manageSwitch("false", data[0]['house_name'])}>CLOSE</Button>{' '}
        </div>
      </div>
    </>
  );
  
};

export default Control;