import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/AppStyle/Import.scss'
const HomePage = lazy(()=>import("./Page/HomePage"))
const Navbar = lazy(()=>import("./Components/Navbar"))
const Services = lazy(()=>import("./Page/Services"))
const Expertise = lazy(()=>import("./Page/Expertise"))
const Footer = lazy(()=>import("./Page/Footer"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <HomePage />
    <Services />
    <Expertise />
    <Footer />  
  </>


)
