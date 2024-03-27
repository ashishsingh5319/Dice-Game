import React from 'react'
import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <StyledTotalScore>
      <h1>{score}</h1>
        <p>Total Score</p>
    </StyledTotalScore>
  )
}

export default TotalScore

const StyledTotalScore = styled.div`
        max-width:  1200px;
        gap: 500px;
        text-align: center;
    h1{
        font-size: 50px;
        line-height: 5px;
        
    }
    p{
        font-size: 25px;
        font-weight: 150;
     
    }
`