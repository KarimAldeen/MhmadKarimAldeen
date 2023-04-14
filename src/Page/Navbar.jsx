import React from 'react'

const Navbar = () => {

  return (
    <div className='Navbar'>
      <div><img className='Left' src='/Home/Arrow.svg' alt='Arrow' width="140" /></div>
      <div>
          <a href='#Home'>Home</a>
    <a href="#Services">Services</a>
    <a href="#Gallery">Gallery</a>
    <a href="#Location">Location</a>

    <a href="#footer">Footer</a>
      </div>
  
    <div><img className='Right' src='/Home/Arrow.svg' alt='Arrow' width="140" /></div>

    </div>
  )
}

export default Navbar