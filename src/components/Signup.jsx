import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPersonFill, BsEnvelopeFill, BsPhoneFill, BsBuilding, BsLockFill } from 'react-icons/bs';
import {NavLink} from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

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
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsEnvelopeFill /></span>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsPhoneFill /></span>
            <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Phone" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsBuilding /></span>
            <input type="text" className="form-control" id="work" value={work} onChange={(e) => setWork(e.target.value)} required placeholder="Work" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" className="form-control" id="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required placeholder="Confirm Password" />
          </div>
          <button type="submit" className="btn btn-primary pb-2">Sign Up</button>
          <NavLink to="/login" className="mx-4 fw-bold text-decoration-none">Iam Already Registered</NavLink>
        </form>
        
      </div>
    </>
  )
}
