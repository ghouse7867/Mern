import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPersonFill, BsEnvelopeFill, BsPhoneFill, BsBuilding, BsLockFill } from 'react-icons/bs';
import {NavLink} from 'react-router-dom';

export default function Signup() {
  const [user, setUser] = useState({
    name: "",email: "", phone: "", work: "",password: "",cpassword: ""
  })
  let name, value
  const handleInput = (e) => {
   name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value})
   
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", name, email, phone, work, password, cpassword);
  }
  return (
    <>
      <div className="container mt-1" style={{ width: '50%', margin: '0 auto' }}>
        <h1 className="my-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsPersonFill /></span>
            <input type="text" name="name" className="form-control" id="name" value={user.name} onChange={handleInput} required placeholder="Name" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsEnvelopeFill /></span>
            <input type="email" name="email" className="form-control" id="email" value={user.email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsPhoneFill /></span>
            <input type="tel" className="form-control"name="phone" id="phone" value={user.phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Phone" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsBuilding /></span>
            <input type="text" name="work" className="form-control" id="work" value={user.work} onChange={(e) => setWork(e.target.value)} required placeholder="Work" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" name = "password" className="form-control" id="password" value={user.password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" name = "cpassword" className="form-control" id="cpassword" value={user.cpassword} onChange={(e) => setCpassword(e.target.value)} required placeholder="Confirm Password" />
          </div>
          <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary pb-2 me-4">Sign Up</button>
    <NavLink to="/login" className="mx-4 fw-bold text-decoration-none ms-auto">I am Already Registered</NavLink>
  </div>
        </form>
        
      </div>
    </>
  )
}
