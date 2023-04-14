import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Page/Footer'
import Gallery from './Page/Gallery'
import Location from './Page/Location'
import Navbar from './Page/Navbar'
import Services from './Page/Services'
import './styles/app.scss'
const HomePage = lazy(()=>import("./Page/HomePage"))


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Navbar/>
    <HomePage />
    <Services/>
    <Gallery/>
    <Location /> 
    <Footer />

  </>


)
