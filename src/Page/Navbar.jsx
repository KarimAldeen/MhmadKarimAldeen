import React from 'react'
import Logo from '../../public/Logo.svg'
import karimAldeen from '../../public/karimAldeen.pdf'
const Navbar = () => {
  function MouseEnter(){
   document.getElementById("App").classList.add("App")
  }
  function MouseLeave(){
    document.getElementById("App").classList.remove("App")
   }
  return (
    <div className='Navbar'>
        <div className='Navbar_Left'>
        <a href={karimAldeen} download onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} >
          <button> Download CV</button>
          </a> 
        </div>
        <div className='Navbar_Mid'>
        <a href='#HomePage'>Home</a>

           <a href='#Services'>Services</a>
            <a href='#Expertise'>Experience</a>
            <a href='#Footer'>Contact</a>

        </div>
        <div className='Navbar_Right'>
        <img src={Logo} alt='Karim' width="40px" height="40px"  />
        <div  id='App'></div>
        </div>

    </div>
  )
}

export default Navbar