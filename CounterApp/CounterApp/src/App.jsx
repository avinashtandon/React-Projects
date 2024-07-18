import React from 'react'
import "./App.css";
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0)
  return (
    <>
    <h1>Counter App</h1>
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value -1)}disabled = {value ===0}>-</button>
      <button onClick={()=> setValue(value +1)}>+</button>
    </div>
    </>
  )
}

export default App
