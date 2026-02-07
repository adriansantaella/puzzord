import { useState, useRef } from 'react'
import './App.css'
import Grid from './Grid'
function App() {
  const wordinput = useRef(null);

 const handleInput = () => {
  console.log(wordinput.current.value)
 }

  return (
    <>
      <h1>Puzzword</h1>
      <Grid />
      
      <input type="text" ref={wordinput} maxLength={5} />
      <button type="submit" onClick={handleInput}>Guess</button>
      
    </>
  )
}

export default App
