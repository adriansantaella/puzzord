import { useState, useRef, useEffect } from 'react'
import './App.css'
import Grid from './Grid'

function App() {
  const wordinput = useRef(null);
  const word = 'tooth';

  const [currentGuess, setCurrentGuess] = useState(0);
  const [guesses, setGuesses] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]
)

  const handleInput = () => {
    let input = wordinput.current.value.split('');
    console.log(input);
  }

  const submitGuess = () => {
    let input = wordinput.current.value;
    console.log(input.length);
    if (input.length < 5) {
      alert('You must submit a 5-letter word.');
      return;
    }

    useEffect(() => {
      wordinput.focus();
    }, [])

  }

  return (
    <>
      <h1>Puzzword</h1>
      <Grid guesses={guesses} currentGuess={currentGuess}/>
      
      <input type="text" ref={wordinput} onInput={handleInput} maxLength={5} />
      <button type="submit" onClick={submitGuess}>Guess</button>
      
    </>
  )
}

export default App
