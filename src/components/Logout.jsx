import { useEffect, useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App.jsx"

export default function Logout() {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate();
  useEffect(()=>{
    fetch('https://mernm.onrender.com/logout', {
          method: "GET",
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include",
        withCredentials: true,
    }).then((res)=>{
      dispatch({type:"USER", payload:false})
       navigate('/login',{ replace:true});
      
       if(res.status != 200) {
         const error = new Error(res.error);
         throw error
       }
    }).catch((err)=>{
      console.log(err)
    })
  })
  return(
     <>
       <div className="d-flex justify-content-center align-items-center vh-100">
       <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
         </div>
      </>
    
  )

  
}
