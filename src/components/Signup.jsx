import React from 'react';      
import { useState } from 'react';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
        </div>
        <div className="mb-3">
          <label htmlFor="work" className="form-label">Work</label>
          <input type="text" className="form-control" id="work" value={work} onChange={(e) => setWork(e.target.value)} required ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required ></input>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
      
  )
      <Footer />
       </>
    
  )
}