import React from 'react';
// import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6 text-center ">
            <h1>Welcome to MERN Website</h1>
            <p className="lead my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" className="btn btn-primary btn-lg">Get Started</a>
          </div>
        </div>
      </div>
    </>
  )
}

