import React from "react";
import Swal from 'sweetalert2'
import { useState } from 'react'
import Home from "./home";

function SweetAlert2() {
    const fireAlert = () => {
        Swal.fire({
            title: 'Saved!',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            icon: 'warning'
        }
        ).then((result) => {
            if (result.isConfirmed) {   
  
                Swal.fire('Nice to meet you', '', 'success');
            }
        })
    }
    return (
        <div >
            <center>
  
                <button className="btn btn-primary" 
                    onClick={fireAlert}>
                    Click me to see Sweet Alert 2
                 </button>
            </center>
        </div>
    )
}
  
export default function App() {
    return (
        <div className="App">
            <h1 style={{ color: 'green' }}>
                <Home />
            </h1>
            <h3>SweetAlert2 in React</h3>
            <SweetAlert2 />
        </div>
    );
}

// export default Reset
