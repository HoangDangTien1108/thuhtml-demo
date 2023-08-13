import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const hanldeClick = () => {
    setA(a + 1) 
  } 
  return(
  <>
    <button onClick = {hanldeClick}>a = {a}</button>
    <button onClick = {() =>{
      setB(b+1)
    }}>b = {b}</button>
  </>
  )
}
 
export default App
