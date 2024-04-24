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
        <div className='dice' onClick={roleDice}>
        <img src={dicee} alt="cube" height={170}/>
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