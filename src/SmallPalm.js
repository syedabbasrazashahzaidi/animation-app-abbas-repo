import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations';
import Palm1 from './Images/palm1.png';
function SmallPalm() {

    // const {keyframes, timing}=slideOutLeft
    // const { ref } = useWebAnimations({
    //     keyframes,
    //     timing: {
    //         ...timing,
    //         delay:400,
            
    //     }
    // });

    const {ref}=useWebAnimations({
        keyframes:[
          {transform: 'translate(-500px)'},
          {transform: 'translate(0)'}

        
          ],
        timing:{
         
          duration:7000
        }
      });
    
  
    return (
        <img  className="palm1" ref={ref} src={Palm1} alt="Palm1"/>

    )
}

export default SmallPalm
