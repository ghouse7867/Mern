import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await fetch('/signin', {
      method : "POST",
      headers : {"Content-Type" : "application/json" },
        body: JSON.stringify({
        email, 
        password
      })
   });
    
  
   const data = res.json();

  if(res.status === 400 || !data) {
    window.alert("Invalid Credentials")
  } else if (res.status === 404) {
    window.alert("Not Registered Please Create An Account")
  } else if (res.status === 200) {
    window.alert("Login Successful")
    navigate('/about');
  }

 };

  return (
    <>
      <form method="POST" style={{ width: '30%', margin: '0 auto' }} >
        <div className="mb-3 my-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
        </div>
        {/* {error && <div className="alert alert-danger">{error}</div>} */}
          <div className="d-flex justify-content-center">
  <button type="submit" onClick={handleLogin}className="btn btn-primary pb-2 me-4">Submit</button>
  <NavLink to="/Signup" className="mx-4 fw-bold text-decoration-none ms-auto">Create An Account</NavLink>
          </div>
      </form>
    </>
  );
}
