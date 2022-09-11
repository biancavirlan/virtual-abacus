

const LittleFriend = () => {
    return (
        <div className="dark-container p-2">
            <h1>Little-Friend</h1>

            <p>When performing additon, always finish moving beads on the current rod before dealing with any carry to the tens rod or rod to the left.</p>
            <p>When there are not enough lower beads too add or move up we need to use the formulas to help, little friends by using the queen.</p>

            <ul>
                <li>5 with 1 and 4</li>
                <div>
                    <img src={"images/little-friends/little-friends1.png"}></img>
                </div>
                <li>5 with 2 and 3</li>
                <li>5 with 3 and 2</li>
                <li>5 with 4 and 1</li>
            </ul>
        </div>
    )
}

export default LittleFriend;