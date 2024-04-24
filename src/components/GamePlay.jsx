import React, { useState } from 'react';
import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore'
import styled from 'styled-components'
import Dice from './Dice'
import Rules from './Rules';

const GamePlay = () => {
    const [IsNumSelected,setIsNumSelected] =React.useState();
    const [ChangeDice,setChangeDice]= useState(1);
    const [score ,setscore]=useState(0); 
    const [error,seterror]=useState("");  
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber =(min , max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min) ;
    };

    const roleDice = ()=>{
        if(!IsNumSelected){
            seterror("You have not selected any number");
            return;
        }
        seterror("");
        const randomNumber = generateRandomNumber(1,7);
        setChangeDice((prev)=>randomNumber);

       
        
        if (IsNumSelected===randomNumber){
            setscore((prev)=> prev + randomNumber);
        }else{
            setscore((prev)=> prev - 2);
        }
        setIsNumSelected(undefined);

    }
    const resetScore = () => {
        setscore(0);
      };
    
  

  return (
   <MainContainer>
    <div className='top_section'>
    <TotalScore score={score} />
        <NumberSelector 
        error= {error}
        seterror={seterror}
        IsNumSelected={IsNumSelected}
        setIsNumSelected={setIsNumSelected}/>
        
    </div>
    <Dice 
    ChangeDice={ChangeDice}
    roleDice={roleDice}/>
     <div className='btn'>
        <button onClick={resetScore}>Reset Score</button>
        </div>
        <div className='btns'>
        <button onClick={()=>setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules</button>
        </div>
        {showRules && <Rules />}
        
   </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`

    padding-top: 2px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }   
    .btn{
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-bottom: 10px;

    }
    .btns{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
`