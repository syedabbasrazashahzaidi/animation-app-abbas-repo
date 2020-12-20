import React from 'react'
import Cloud from './Images/cloudlong.png';
import Cloud2 from './Images/cloudsmall.png';
import useWebAnimations from '@wellyshen/use-web-animations';


const CloudPage = () => {

    const {ref}=useWebAnimations({
        keyframes:[
          {transform: 'translate(-1000px,0)'},
          {transform: 'translate(0, 0)'},
          {transform: 'translate(1000px, 0)'},
          ],
        timing:{
          iterations: Infinity,
          duration:5000
        }
      });

    return (
        <div>
     <div className="clouds__div" ref={ref}>   
        <img className="cloud__image" src={Cloud} alt="Long Cloud"/>
        <img className="cloud2__image" src={Cloud2} alt="Small Cloud"/>
        <img className="cloud3__image" src={Cloud2} alt="Small Cloud2"/>
     </div>
        </div>
    )
}

export default CloudPage
