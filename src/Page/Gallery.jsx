import React from 'react'


function Gallery() {
    const ArrayOfImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
  return (
    <div className='Gallery' id='Gallery'>
    <div className='Gallery_Top'> 
    <h1>Our Gallery</h1>
    </div>
    <div className='Gallery_Bottum'>
            {
            ArrayOfImages.map((Image,index) =>{
                return <div className='image-continaer' key={index}>
                    <img src={`/Gallery/${Image}`}  alt=""  />
                </div>
            })
            }
    </div>

    </div>
  )
}

export default Gallery