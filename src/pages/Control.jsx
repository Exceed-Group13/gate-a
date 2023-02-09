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
        <div>
            <Button className="but" variant="outline-success">Success</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
        </div>
    </>
  );
};

export default Control;
