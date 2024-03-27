import React from 'react'

const MainPage = ({toggle}) => {
  return (
    <div className="container">
        <div>
      <img src="./images/cube.png" alt="dice" /></div>
      
      <div className='content'>
      <h1>DICE GAME</h1>
      <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default MainPage
