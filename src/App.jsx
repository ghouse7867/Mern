// import './App.css'//
// import '../Server/Apps.cjs'
import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx'
import Errorpage from './components/Errorpage.jsx'
import Logout from './components/Logout.jsx'
import { initialState, reducer} from './reducer/UseReducer.jsx'

export const UserContext = createContext();

export default function App() {

   const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    // <main>
    //   React ⚛️ + Vite ⚡ + Replit 🌀 + MongoDB Atlas
    //   {/* <Apps /> */}
    // </main>
    <>
  <UserContext.Provider value = {{state, dispatch}}> 
  <Navbar />
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<Errorpage />} />
  <Route path="/logout" element={<Logout />} />
  </Routes>
  <div style={{ height: "200px" }}></div>
  <Footer />
  </UserContext.Provider>
    </>
  )
}
