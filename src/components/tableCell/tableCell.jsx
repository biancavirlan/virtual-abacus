import { useState } from 'react';
import AbacusBall from "../abacusBall/abacusBall";

const TableCell = ({movePosition, onBallMove}) => {
    const [cellPosition, setCellPosition] = useState(0);

    const handleMoveBall = () => {
        setCellPosition(prevValue => {
            const move = prevValue === 0 ? movePosition : 0;
            onBallMove(move);
            return move;
        })
    }

    return(
        <td onClick={handleMoveBall} style={{top: cellPosition}}>
          <AbacusBall themeChanger={cellPosition === 0}/>
        </td>
    )
}

export default TableCell;