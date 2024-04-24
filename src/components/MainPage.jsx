import React from 'react'
import logo from '../images/cube.png'
const MainPage = ({toggle}) => {
  return (
    <div className="container">
        <div>
<<<<<<< HEAD
      <img src={logo} alt="cube" />
      </div>
=======
      <img src={logo} alt="dice" /></div>
>>>>>>> dabfa147fb0db90bdbe1e7b918f7eb9fbcaa7f37
      
      <div className='content'>
      <h1>DICE GAME</h1>
      <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default MainPage
