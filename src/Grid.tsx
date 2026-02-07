import Row from "./Row"

function Grid({guesses, currentGuess}) {
    const MAX_ROWS = 5;

    const displayRows = [...guesses];
    if (displayRows.length < MAX_ROWS) {
        displayRows.push(currentGuess);
    }

    while (displayRows.length < MAX_ROWS) {
        displayRows.push("")
    }
    
    console.log(guesses);

    return (
        <div className="pw-grid">
            { displayRows.map((guess, index) => <Row guess={guess} key={index} />) }
        </div>
    )
}

export default Grid