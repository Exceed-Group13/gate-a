import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/Register.css';

const Register = () => {
  const [keyName, setKeyName] = useState('');
  const [keyPassword, setKeyPassword] = useState('');

  function manageKey(pin, house) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pin: [...pin].map(str => {return parseInt(str, 10)}),
        house_name: house,
      }),
    };

    fetch("https://ecourse.cpe.ku.ac.th/exceed13/regis", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyName || !keyPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both Key Name and Key Password',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Key Registered',
      }).then(function() {
        window.location = "/";
    });
      manageKey(keyPassword, keyName)
    }
  };

  return (
    <div className="register">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
      <div className="wrapper">
        <h1 className='setH1'>Register Key</h1>
        <br />
        <br />
        <form className="form" method="post" onSubmit={handleSubmit}>
          <input
            className="input_name"
            placeholder="Key Name"
            value={keyName}
            onChange={(e) => setKeyName(e.target.value)}
          />
          <input
            className="input-pass"
            type="password"
            inputmode="numeric"
            pattern="[1-3]{3}"
            placeholder="Key Password"
            value={keyPassword}
            maxLength="3"
            minLength="3"
            onChange={(e) => setKeyPassword(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" className="submit" value="OK" />
        </form>
      </div>
    </div>
  );
};

export default Register;
