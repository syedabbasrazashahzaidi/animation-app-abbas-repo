import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations';
import Dog from './Images/dog.gif';

function DogRun() {

    const {ref}=useWebAnimations({
        keyframes:[{transform: 'translate(0,0)}'},
                   {transform: 'translate(100px,-14px)', easing: 'ease-in'},
                   {transform: 'translate(200px,14px)}',easing: 'ease-in'},
                   {transform: 'translate(0,30px)}', easing: 'ease-in'},
                   {transform: 'translate(0,-30px)}', easing: 'ease-in'}
                   ],
        timing: {
            duration: 3000
        }
    });
    return (
        <img className="dog__run" ref={ref}  src={Dog} alt="Running Dog"/>
    )
}

export default DogRun
