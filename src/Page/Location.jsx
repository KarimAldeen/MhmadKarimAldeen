import React from 'react'

function Location() {
  return (
    <div className='Location' id='Location'>
        <div className='Location_Top'>
            <h1>Location</h1>
        </div>
        <div className='Location_Bottum'>
            <div className='Location_Bottum_Left'>
                <h1>Visit Us Or Take Location</h1>
                <p>
                    we are happy to share  our location  to your
                </p>
                <a className='map-button' target={'_blank'} href='https://www.google.com/maps/place/%D8%A8%D8%B1%D8%AC+%D8%AA%D8%A7%D9%84%D8%A9%D8%8C+%D8%A7%D8%A8%D9%86+%D8%A7%D9%84%D9%85%D9%82%D9%81%D8%B9%D8%8C+%D8%AF%D9%85%D8%B4%D9%82%D8%8C+%D8%B3%D9%88%D8%B1%D9%8A%D8%A7%E2%80%AD/@33.4968539,36.24578,17z/data=!3m1!4b1!4m6!3m5!1s0x1518de3790cd5bbd:0x4a9a1e0d39b1148a!8m2!3d33.4968495!4d36.2432104!16s%2Fg%2F1th4_4xr'>
                        <div className='icons'>
                            <img src='/Location/1.svg'  width={30}/>
                            

                        </div>
                        <div className='text'>
                        See In Google Map
                        </div>
                </a>
            </div>
            <div className='map-images'>
                <img src='/Location/map.jpg'  width={700}/>
            </div>
        </div>
    </div>
  )
}

export default Location