import Row from "./Row"

function Grid() {
    const guesses = [
        ["a", "p", "p", "l", "e"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]

    console.log(guesses);

    return (
        <div className="pw-grid">
            { guesses.map((guess, index) => <Row guess={guess} key={index} />) }
        </div>
    )
}

export default Grid