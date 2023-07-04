import { useState } from 'react'

import NavBar from './components/NavBar'
import Body from './components/Body'
import './App.css'

function App() {

//  const [darkOn, setDarkOn] = useState(true)




  return (
    <div className='body'>
    <NavBar/>
    <div className='container-header'>
      <div className='input'><input type="search" /></div>
      <div className='btn-container'><button className='dark'>darkMode</button></div>
    </div>
    <Body/>
    </div>
  )
}

export default App
