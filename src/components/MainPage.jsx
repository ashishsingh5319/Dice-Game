import React from 'react'
import logo from '../images/cube.png'
const MainPage = ({toggle}) => {
  return (
    <div className="container">
        <div>
      <img src={logo} alt="cube" />
      </div>
      
      <div className='content'>
      <h1>DICE GAME</h1>
      <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default MainPage
