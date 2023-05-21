import React, { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContext} from "../App.jsx"
import Cookies from 'js-cookie';

export default function Login() {
  const {state, dispatch} = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await fetch('https://mernm.onrender.com/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      credentials: 'same-origin',
      body: JSON.stringify({
        email,
        password
      })
    });
    
    if (res.status === 400) {
      // handle error here
      window.alert(res.status + ' Invalid Credentials');
      return;
    }else if (res.status === 404) {
      window.alert(res.status + ' server not active or please register ');
      return;
    }

    try {
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert('Login failed or already Login');
        console.log('Login failed');
      } else if (data.status === 400 || !data) {
         window.alert('In valid Credentials');
        console.log('Login failed');
      } else if (data.message === " user Signed in successfully") {
        console.log(data.token)
        Cookies.set("jwtoken", data.token, {
        expires: 7, // Set cookie expiration (in days)
        secure: true, // Set the secure flag to true if using HTTPS
        sameSite: "none" // Set the sameSite flag to "none" for cross-site cookies
      });
        dispatch({type:"USER", payload:true})
        navigate('/about');
        window.alert('Login Successful');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
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
          <button type="submit" onClick={handleLogin} className="btn btn-primary pb-2 me-4">Submit</button>
          <NavLink to="/Signup" className="mx-4 fw-bold text-decoration-none ms-auto">Create An Account</NavLink>
        </div>
      </form>
    </>
  );
}
