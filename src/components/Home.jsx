// import '../App.css'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App.jsx"


export default function Home() {
  const {state, dispatch} = useContext(UserContext)
  const [name, setname] = useState('')
  const navigate = useNavigate();
  
  const userHome = async () =>{
    try {
      const res = await fetch('https://mernm.onrender.com/getdata', {
        method: 'GET',
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'Application/json',
        },
        credentials: 'include'
      });

      const data = await res.json();
   
      if (res.status === 200) {
        setname(data.name)
        dispatch({type:"USER", payload:true})
        
      } else {
        const error = new Error(res.statusText);
        throw error;
      }
    } catch(err) {
      console.log(err)
        navigate('/login')
    }
  }
   useEffect(()=>{
     userHome();
  },[]);
  
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6 text-center ">
            <h1>HI <span className="text-success">{name.toUpperCase()}</span></h1>
            <h1>Welcome to MERN Website</h1>
            <p className="lead my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" className="btn btn-primary btn-lg">Get Started</a>
          </div>
        </div>
      </div>
    </>
  )
}

