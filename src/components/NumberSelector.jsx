import React from 'react'
import styled from 'styled-components'
const NumberSelector = ({seterror,error,IsNumSelected, setIsNumSelected}) => {
    const arryNum=[1,2,3,4,5,6];
    const numberSelectorHandler = (value) =>{
          setIsNumSelected(value);
          seterror("")};

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
    <div className='select'>
    {arryNum.map((value,i)=>(
        <SelectorContainer 
        key={i}
        onClick={()=>numberSelectorHandler(value)}
        IsSelected={value===IsNumSelected}>
      {value}
    </SelectorContainer>
    ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector


const NumberSelectorContainer= styled.div`
    display:flex;
    flex-direction: column;
    align-items: end;


    .select{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 22px;
        font-weight: 700px;
    }
    .error{
      color: red;
    }
`

const  SelectorContainer = styled.div`
        height: 50px;
        width: 50px;
        border: 1px solid black;
        display: grid;
        place-items: center;
        background-color: ${(props)=>(props.IsSelected ? "black" : "white")};
        color: ${(props)=>(!props.IsSelected ? "black" : "white")};
`
