import React, { useState } from "react";
import Menu from "../components/Menu";
import Button from 'react-bootstrap/Button';
import '../styles/Control.css'

const Control = () => {

  return (
    <>
        <div>
            <Menu menu1={"Manage"} menu2={"Password"} />
        </div>
        <div className="status-box">
            <Button className="status" size="lg" variant="outline-success">OPEN</Button>{' '}
            <Button className="status" size="lg" variant="outline-danger">CLOSE</Button>{' '}
        </div>
        <div className="switch-box">
            <Button className="switch-but" size="lg" variant="primary">ON</Button>{' '}
            <Button className="switch-but" size="lg" variant="primary">OFF</Button>{' '}
        </div>
    </>
  );
};

export default Control;
