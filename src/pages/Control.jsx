import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from 'react-bootstrap/Button';
import '../styles/Control.css'

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
  
  useEffect(() => {
    console.log(props.data)
    if (props.data) {
      setController(props.data.state);
      console.log(controller);
    }
  }, [props.data]);
  
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

  return data && (
    <>
        <div className="navDiv">
            <Menu menu1={"Manage"} menu2={"Password"} />
        </div>
        <div>
          <p>Door state: {`${data[0]['state']}`}</p>
        </div>
        <div className="status-box">
            <Button className="status" size="lg" variant="outline-success">OPEN</Button>{' '}
            <Button className="status" size="lg" variant="outline-danger">CLOSE</Button>{' '}
        </div>
        <div className="switch-box">
            <Button className="switch-but" size="lg" onClick={() => manageSwitch("true", "house1")}>OPEN</Button>{' '}
            <Button className="switch-but" size="lg" onClick={() => manageSwitch("false", "house1")}>CLOSE</Button>{' '}
        </div>
    </>
  );
};

export default Control;
