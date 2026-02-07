function Tile({status, letter}) {

    return (
        <div className={status + ' pw-tile'}>{letter}</div>
    )
}

export default Tile