import { useEffect, useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App.jsx"

export default function Logout() {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate();
  useEffect(()=>{
    fetch('/logout', {
          method: "GET",
          headers: {
          Accept: 'Application/json',
          'Content-Type': 'Application/json',
        },
        credentials: "include"
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
        <h1>Logout</h1>
        
      </>
    
  )

  
}
