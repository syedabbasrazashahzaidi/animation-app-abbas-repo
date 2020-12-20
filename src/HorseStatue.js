import React from 'react'
import HorsePawn from './Images/r_knight_small.png';
import useWebAnimations, { rotateInDownRight } from '@wellyshen/use-web-animations';
function HorseStatue() {

    const {keyframes, timing}=rotateInDownRight;
    const { ref } = useWebAnimations({
    keyframes,
    timing: {
    ...timing,
    delay: 5000, // Delay 5s
    duration: 1000 , // Speed up the animation
    
  },

             });


    return (
        <img className="horse__pawn" ref={ref} src={HorsePawn} alt="Horse Pawn"/>
    )
}

export default HorseStatue
