import React from 'react'
import styled from 'styled-components'
const Dice = ({ChangeDice,roleDice}) => {

    

    
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
      <img src={`./images/dice_${ChangeDice}.png` }alt="cube" height={170}/>
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