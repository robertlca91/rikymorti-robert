import { useState } from 'react'
import Locations from './components/Locations'

import './App.css'

function App() {


  return (
    <div className="App">
      <Locations/>
      <footer>
        <img className="logo" src="https://github.com/paul3183/Rick-And-Morty-Proyect/raw/main/src/assets/images-removebg-preview.png" alt="img"/>
        <h3>DEVELOPERS</h3>
        <p>Paul Ruiz</p>
        <p>Miguel Martinez</p>
        <p>Roberto Centeno </p>
      </footer>
    </div>
  )
}


export default App
