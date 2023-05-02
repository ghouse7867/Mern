import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        {/* Footer content */}
        <div className="container p-4">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>
            
            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ms-auto">
              <h5 className="text-uppercase mb-0">Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    <FaInstagram /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          © 2023 MERN
        </div>
      </footer>
    </>
  );
}
