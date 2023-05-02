import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPhoneFill, BsBuilding, BsEnvelopeFill } from 'react-icons/bs';

export default function Contact() {
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
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name"  required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <div style={{height:'100px'}}>
            </div>
          </form>
        </div>
      </div>
    </div>
       </>
  )
}
