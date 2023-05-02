import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span><img src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png" style={{width:"6%", height:"2%"}}></img></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active mx-2" aria-current="page" to="/">Home</NavLink>
     </li>
        <li className="nav-item">
          <NavLink className="nav-link active mx-4" aria-current="page" to="/about">AboutMe</NavLink>
     </li>
        <li className="nav-item">
          <NavLink className="nav-link active mx-2" aria-current="page" to="/Contact">Contact</NavLink>
     </li>
        <li className="nav-item">
          <NavLink className="nav-link active mx-2" aria-current="page" to="/login">Login</NavLink>
     </li>
        <li className="nav-item">
          <NavLink className="nav-link active mx-2" aria-current="page" to="/signup">Registration</NavLink>
     </li>
        
        </ul>
      </div>
  </div>
</nav>
    </>
  )
}