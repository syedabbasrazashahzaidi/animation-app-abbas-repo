import React from 'react'
import CloudPage from './Cloud';
import './App.css';
import Images from './Images/queen_run.gif';

import SmallPawn from './Images/r_pawn_small.png';

import useWebAnimations, { swing } from '@wellyshen/use-web-animations';
import HorseStatue from './HorseStatue';
import SmallPalm from './SmallPalm';
import DogRun from './DogRun';

function App() {

const {keyframes, timing}=swing
const {ref}=useWebAnimations({ 
  keyframes,
  timing: { ...timing,
    iterations: 3}
 });



  return (
    <div className="main__container">
      <div className="queen__run">
        <img src={Images} alt="Running queen" />
      </div>

    <CloudPage/>

    <DogRun/>
    
    <img ref={ref} className="small__pawn" src={SmallPawn} alt="Small pawn"/>
     
    <SmallPalm/>

    <HorseStatue/>
     
      
      
    </div>
  );
}

export default App;
