import React,{useState, useEffect,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPhoneFill, BsBuilding, BsEnvelopeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App.jsx"

export default function Contact() {
    const {state, dispatch} = useContext(UserContext)
   const navigate = useNavigate();
  const [userData, SetUserData] = useState({name: "",email: "",phone: "",message: ""});
  
  const userContact = async () =>{
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
        SetUserData({...userData,name:data.name, email:data.email,phone:data.phone})
  
      } else {
        const error = new Error(res.statusText);
        throw error;
        
      }
    } catch(err) {
      console.log(err);
        navigate('/login');
    }
  }
   useEffect(()=>{
     userContact();
  },[]);
//storing the data in stores
  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    SetUserData({...userData, [name]:value });
  }
  //send the data to backend
   const ContactForm = async (e)=> {
     e.preventDefault();
     const {name, email, phone, message} = userData;
     try {
       const res = await fetch('https://mernm.onrender.com/contact', {
        method: "POST",
        headers : {"Content-Type" : "application/json" },
        credentials: 'include',
        body: JSON.stringify({
        name,
        email, 
        phone,
        message
      })
      });
     const data = await res.json();
     if(!data) {
       cosole.log("message not sent")
     }else {
       alert("message sent");
       SetUserData({ ...userData});
      console.log({ ...userData});
     }
     }catch(err){
       console.log(err)
     }
     
   }
  if (state) {
    return (
    <>
   <div className="d-flex justify-content-center flex-wrap">
  <div className="card m-5 shadow " style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title"><BsPhoneFill /> Mobile</h5>
    <p className="card-text">987654321</p>
  </div>
</div>
       <div className="card m-5  shadow " style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title"><BsEnvelopeFill /> Email</h5>
    <p className="card-text">moid.ghouse@gmail.com</p>
  </div>
</div>
   <div className="card m-5 shadow " style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title"><BsBuilding /> Address</h5>
    <p className="card-text">India</p>
  </div>
</div>
</div>

    <div className="container my-5 shadow ">
      <h1 className="text-center mb-2">Contact Me</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form method = "post">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value = {userData.name} onChange={handleInput} name="name"  required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" value={userData.email} onChange={handleInput} name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" value={userData.phone} onChange={handleInput} name="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" value={userData.message} onChange={handleInput} name="message" rows="5" required></textarea>
            </div>
            <button type="submit" onClick={ContactForm} className="btn btn-primary">Send Message</button>
            <div style={{height:'100px'}}>
            </div>
          </form>
        </div>
      </div>
    </div>
       </>
  )
  }else{
    return (
      <>
         <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
      </>
    )
    
  }
  
}
