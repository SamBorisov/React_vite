import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Meme from './components/MemeGen'
import StarWars from './components/StarWars'
import SSO from './components/SSO'


function App() {
  

  return (
    <div>
      <SSO />
      <Meme />
      <StarWars />

        
    </div>
  )
}

export default App
