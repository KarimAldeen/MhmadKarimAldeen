import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.scss'
const HomePage = lazy(()=>import("./Page/HomePage"))
const Navbar = lazy(()=>import("./Page/Navbar"))
const Services = lazy(()=>import("./Page/Services"))
const Expertise = lazy(()=>import("./Page/Expertise"))
const Footer = lazy(()=>import("./Page/Footer"))
const Look = lazy(()=>import("./Page/Look"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <HomePage />
    <Services />
    <Expertise />
    <Look />  
    <Footer />  

  </>


)
