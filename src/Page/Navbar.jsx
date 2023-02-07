import React from 'react'
import Logo from '../../public/Logo.svg'
import karimAldeen from '../../public/karimAldeen.pdf'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar_Left'>
        <a href={karimAldeen} download >
          <button> Download CV</button>
          </a> 
        </div>
        <div className='Navbar_Mid'>
        <a href='#HomePage'>Home</a>

           <a href='#Services'>Services</a>
            <a href='#Expertise'>Experian</a>
            <a href='#Footer'>Contact</a>

        </div>
        <div className='Navbar_Right'>
        <img src={Logo} alt='Karim' width="40px" height="40px"  />
        </div>

    </div>
  )
}

export default Navbar