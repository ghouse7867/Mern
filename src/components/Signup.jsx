import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPersonFill, BsEnvelopeFill, BsPhoneFill, BsBuilding, BsLockFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
     if (name === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    // Update the state with the email validity flag
    setUser((prevUser) => ({ ...prevUser, isValidEmail }));
  }
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch('https://mernm.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    if (!res.ok) {
      window.alert('Registration failed');
      console.log('Registration failed');
      return;
    }

    try {
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert('Registration failed or already registered');
        console.log('Registration failed');
      } else {
        window.alert('Registration Successful');
        console.log('Registration Successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted:", name, email, phone, work, password, cpassword);
  // }

  return (
    <>
      <div className="container mt-1" style={{ width: '50%', margin: '0 auto' }}>
        <h1 className="my-4">Sign Up</h1>
        <form method="POST">
          <div className="input-group mb-3">
            <span className="input-group-text"><BsPersonFill /></span>
            <input type="text" name="name" className="form-control" id="name" value={user.name} onChange={handleInput} required placeholder="Name" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsEnvelopeFill /></span>
            <input type="email" name="email" className="form-control" id="email" value={user.email} onChange={handleInput} required placeholder="Email" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsPhoneFill /></span>
            <input type="tel" className="form-control"name="phone" id="phone" value={user.phone} onChange={handleInput} required placeholder="Phone" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsBuilding /></span>
            <input type="text" name="work" className="form-control" id="work" value={user.work} onChange={handleInput} required placeholder="Work" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" name = "password" className="form-control" id="password" value={user.password} onChange={handleInput} required placeholder="Password" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><BsLockFill /></span>
            <input type="password" name = "cpassword" className="form-control" id="cpassword" value={user.cpassword} onChange={handleInput} required placeholder="Confirm Password" />
          </div>
          <div className="d-flex justify-content-center">
    <button type="submit" onClick={PostData} className="btn btn-primary pb-2 me-4">Sign Up</button>
            
    <NavLink to="/login" className="mx-4 fw-bold text-decoration-none ms-auto">I am Already Registered</NavLink>
  </div>
        </form>
        
      </div>
    </>
  )
}
