import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(false)
  return (
    <>
     <div>The current value is {counter}</div>
     <br/>
     <button onClick={()=> {setCounter(counter+1)} }>Add Value</button>
     <br/> <br/>

     <button onClick={()=>{setCounter(counter-1)}}>Decrease</button>
    </>
  )
}

export default App
