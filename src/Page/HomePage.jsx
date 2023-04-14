import React from 'react'
const HomePage = () => {

  return (
    <div className='HomePage' id='HomePage'>
      <div className='Top_Home' >
      <div className='Left_Section'>
        <div className='Images'>
          <img src='/Home/Learn.svg' alt='Learn' width="100" />
          <img className='School' src='/Home/School.svg' alt='School' width="100" />

        </div>
        <h3>Why Our kindergarten</h3>
        <h1>We Have The Top </h1>
        <h2>Learning PlatForm</h2>
        <h6> Not like other kindergartens, we focus all the power in <br />
          your kids and try to make everything to make them happy<br />
          and get better at the same time
        </h6>
      </div>
      <div className='Right_section'>
        <img src='/Home/girl.jpg' alt='girl' width="600" />

      </div>
      </div>
      <div className='Elipse'>
        <img className='Elipse1' src='/Home/Elipse.svg' alt='' />
        <img className='Elipse2' src='/Home/Elipse.svg' alt='' />

      </div>
      <div className='Down_Home'>
      <div className='Down_Box teachers'>
        <img src='/Home/D1.svg' alt='teachers' width="50"/>
        <h5>Outstanding teachers</h5>
      </div>
      <div className='Down_Box curriculum'>
        <img src='/Home/D3.svg' alt='curriculum' width="50"/>
        <h5>best curriculum</h5>
      </div>
      <div className='Down_Box experiences'>
        <img src='/Home/D2.svg' alt='experiences' width="50"/>
        <h5>International experiences</h5>
      </div>
      </div>
    </div>
  )
}

export default HomePage