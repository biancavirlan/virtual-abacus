import { useState, useEffect } from 'react';
import AbacusBall from "../abacusBall/abacusBall";

const TableCell = ({position, onBallMove, abacus, row, col}) => {

    return(
        <td onClick={() => onBallMove(abacus, row, col)} style={{top: position}}>
          <AbacusBall themeChanger={position === 0}/>
        </td>
    )
}

export default TableCell;