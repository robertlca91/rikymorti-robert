import { useState } from 'react'
import Locations from './components/Locations'

import './App.css'

function App() {


  return (
    <div className="App">
      <Locations/>
      <footer>
        <img className="logo" src="https://o.remove.bg/downloads/9864614c-be37-44ce-99b6-503ce13e6bad/images-removebg-preview.png" alt=""/>
        <h3>DEVELOPERS</h3>
        <p>Paul Ruiz</p>
        <p>Miguel Martinez</p>
        <p>Roberto Centeno </p>
      </footer>
    </div>
  )
}


export default App
