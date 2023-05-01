// import './App.css'
// import '../Server/Apps.cjs'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    // <main>
    //   React ⚛️ + Vite ⚡ + Replit 🌀 + MongoDB Atlas
    //   {/* <Apps /> */}
    // </main>
    <>
  <Navbar />
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  </Routes>

     
    </>
  )
}
