import MainPage from './components/MainPage';
import './App.css';
import { useState } from 'react';
import GamePlay from './components/GamePlay';



function App() {
  const [IsGameStarted , setIsGameStarted] = useState(false);
  function toggleGamePlay(){
    setIsGameStarted(prev => !prev);
  }
  return (
    <div >
      {IsGameStarted ? <GamePlay/> : <MainPage 
      toggle ={toggleGamePlay}/>}
      
    </div>
  );
}

export default App;
