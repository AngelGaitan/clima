import { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Body from './components/Body'
import './App.css'

function App() {

 const [darkOn, setDarkOn] = useState(false)
 const [input2, setInput2] = useState("")
 const [data2, setData2] = useState({})
 const [submit, setSubmit] = useState(false)
 const [celcius, setCelcius] = useState(0)

const dark1 = () =>{
  setDarkOn(!darkOn)
}

useEffect(()=>{
axios
.get(`https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=79d3bdc6b53d4af133740dcb82431d13&lang=es`)
.then(resp => {
  setData2(resp.data)
  setCelcius((resp.data.main.temp) - 273.15)
})

},[input2])



  return (
    <div className={`body ${darkOn ? "bodylol" : "" }`}>
    <NavBar/>
    <div className='container-header'>
      <div className='input'>
        <form 
        onSubmit={ev => {
          ev.preventDefault()
          setInput2(ev.target.input2.value)
        }}>
        <input type="text" className='input1' name='input2' autoComplete='off'/>  
        <button type="submit" className='submit1' onClick={() => setSubmit(true)}>🔎</button>
        </form></div>
      <div className='btn-container'><button className='dark' onClick={dark1}>darkMode</button></div>
    </div>
    <Body
    dark={darkOn}
    data2={data2}
    submit={submit}
    celcius2={celcius}
    />
    </div>
  )
}

export default App
