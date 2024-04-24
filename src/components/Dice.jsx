import React from 'react'
import styled from 'styled-components'
import { cube, dice1,dice2,dice3,dice4,dice5,dice6 } from '../images/image';

const Dice = ({ChangeDice,roleDice}) => {

    
 console.log("changedice")
 
    console.log(ChangeDice)

    var dicee = `dice${ChangeDice}`;
    console.log(dicee)
 
  return (
    <DiceContainer>
<<<<<<< HEAD
        <div className='' onClick={roleDice}>
        {/* <img src={cube} alt="cube" height={170}/> */}
        <img src={cube} alt="cube" />
=======
        <div className='dice' onClick={roleDice}>
      <img src={require(`./images/dice_${ChangeDice}.png` )}alt="cube" height={170}/>
>>>>>>> dabfa147fb0db90bdbe1e7b918f7eb9fbcaa7f37
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default Dice

const DiceContainer = styled.div`
margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 20px;
    }
`
