import { useState } from 'react'
import './App.css'
import TemperatureConverter from './TemperatureConverter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TemperatureConverter/>
    </>
  )
}

export default App
