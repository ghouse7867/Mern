import React from "react";
import {NavLink} from 'react-router-dom';


 const Errorpage = () =>{
  return(
    <>
     <div className="d-flex justify-content-center align-items-center vh-100">
  <div className="m-5 p-5 text-center">
    <h1 className="display-1 text-secondary">404</h1>
    <p className="fw-bold">Oops! Page not found.</p>
    <NavLink to="/" className="btn btn-primary fw-bold">Back to Home</NavLink>
  </div>
</div>

    </>
  )
}

export default Errorpage;