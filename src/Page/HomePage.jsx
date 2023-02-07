import React from 'react'
import Arrow from '../../public/Arrow.svg'
import Face from '../../public/Face.svg'
import Word from '../../public/Real.svg'
import O from '../../public/O.svg'
import Down from '../../public/Down.svg'
import Dot from '../../public/DotO.svg'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
  import { BsLinkedin,BsFillPhoneFill } from "react-icons/bs";
import { RiWhatsappFill,RiMessage2Fill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import {  FaBook} from "react-icons/fa";
import karimAldeen from '../../public/karimAldeen.pdf'

const HomePage = () => {
    
  return (
    <div className='HomePage' id='HomePage'>
        <div className='HomePage_Top'>
            <div className='H_Left'>
            <ReactTooltip anchorId="Google" className="Google" />
            <AiFillGoogleCircle id='Google' data-tooltip-content="MhmadKarimAldeen@gmail.com"/> 
           <span>
           <ReactTooltip anchorId="Linkedin" className="Linkedin"/>
               <BsLinkedin id='Linkedin' data-tooltip-content="MhmadKarimAldeen"/>
            </span>
            <ReactTooltip anchorId="Whatsapp" className="Whatsapp"/>
               <RiWhatsappFill id='Whatsapp' data-tooltip-content="0957551401"/>
        
            </div>
            <div className='H_Mid'>
            <img src={Arrow} className="Arrow fly"  alt='Karim' width="auto" height="auto"  />
            <img src={Dot} className="Dot" alt='Karim' width="auto" height="auto"    />

            <img src={Word} className="Word" alt='Karim' width="700" height="300" />
            <img src={Face}  className="Face shake  " alt='Karim' width="auto" height="auto"  />

            </div>
            <div className='H_Right'>
            <ReactTooltip anchorId="Phone" className="Phone"/>
               <BsFillPhoneFill id='Phone' data-tooltip-content="0951968995"/>
            <span>
              <a href='#Footer'>
              <ReactTooltip anchorId="Message" className="Message"/>
               <RiMessage2Fill id='Message' data-tooltip-content="ContactMe"/>
              </a>

          
            </span>
            <a href={karimAldeen} download>
                     <ReactTooltip anchorId="CV" className="CV"/>
               <FaBook id='CV' data-tooltip-content="Download CV"/>
            </a>
     

            </div>

        </div>
        <div className='HomePage_Down'>
        <img src={O} className="O1 O"  alt='Karim'width="auto" height="auto" title='' />
            <img src={Down} className="Down " alt='Karim'   width="auto" height="auto"title='' />
            <img src={O}  className="O2 O" alt='Karim'  width="auto" height="auto" title='' />

        </div>

    </div>
  )
}

export default HomePage