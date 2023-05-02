import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from './Login.jsx'
import {NavLink} from 'react-router-dom';
import Signup from './Signup.jsx'

export default function Login() {
  return (
    <>
      <form style={{ width: '50%', margin: '0 auto' }}>
  <div className="mb-3 my-4">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" ></input>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" ></input>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
        <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary pb-2 me-4">Submit</button>
  <NavLink to="/Signup" className="mx-4 fw-bold text-decoration-none ms-auto">Create An Account</NavLink>
          </div>
</form>
     
    </>
  )
}