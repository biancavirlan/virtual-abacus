import { useState } from 'react';
import AbacusBall from "../abacusBall/abacusBall";

const TableCell = ({movePosition}) => {
    const [cellPosition, setCellPosition] = useState(0);

    const handleMoveBall = () => {
        setCellPosition(prevValue => prevValue === 0 ? movePosition : 0)
    }

    return(
        <td onClick={handleMoveBall} style={{top: cellPosition}}>
          <AbacusBall themeChanger={cellPosition === 0}/>
        </td>
    )
}

export default TableCell;