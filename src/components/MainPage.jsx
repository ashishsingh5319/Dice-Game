import React from 'react'
import { cube } from '../images/image'
 
const MainPage = ({toggle}) => {
  return (
    <div className="container">
        <div>
      <img src={cube} alt="cube" />
      </div>
      
      <div className='content'>
      <h1>DICE GAME</h1>
      <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default MainPage
