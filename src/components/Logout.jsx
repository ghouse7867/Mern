import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
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
