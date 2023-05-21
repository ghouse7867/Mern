import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})
  const token = Cookies.get("jwtoken");
  const callAboutPage = async () => {
    try {
      const res = await fetch('https://mernm.onrender.com/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'same-origin'
      });

      const data = await res.json();
      
      if (res.status === 200) {
        console.log(data)
        setUserData(data)
      } else {
        const error = new Error(res.statusText);
        throw error;
      }
    } catch(err) {
      console.log(err);
      navigate('/login');
    }
  }

  
  useEffect(() => {
     callAboutPage();
  }, []);


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://weblium.com/blog/wp-content/uploads/2021/05/19-Best-About-Me-Page-Examples-and-How-to-Write-a-Killer-About-Me-Page-1-1-1.png"
            alt="Profile"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor tellus sit amet ligula facilisis,
            vestibulum. Nunc vel dolor faucibus, suscipit sapien et, cursus leo. Aenean porttitor nunc urna, ac
            bibendum urna blandit eu. Etiam maximus convallis est, eu malesuada turpis consequat id. Nullam
            tincidunt nulla purus, sed euismod augue suscipit sed. Fusce in ante eget quam fringilla faucibus.
            Integer euismod quam ac lectus varius, eget bibendum dolor accumsan.
          </p>
          <div>
            <form method="GET">
              <p>name : {userData.name}</p>
              <p>email : {userData.email}</p>
              <p>phone : {userData.phone}</p>
              <p>work  : {userData.work}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
