import { useEffect, useRef, useState } from "react";
import TableCell from "../tableCell/tableCell";
import "./abacus.css";

const Abacus = ({ rowQty = 15 }) => {
  const [separatorWidth, setSeparatorWidth] = useState(0);
  const [movedColumn, setMovedColumn] = useState({});
  const [abacus, setAbacus] = useState([]);
  const abacusContainerRef = useRef();

  const middlePointSeparator = new Array(rowQty)
    .fill(null)
    .map((elem, index) => (
      <td key={index}>
        {index === Math.floor(rowQty / 2) && (
          <div className="point">
            <div />
          </div>
        )}
      </td>
    ));

  useEffect(() => {
    const abacusRows = [];
    for (let j = 0; j < 5; j++) {
      const row = [];
      for (let i = 0; i < rowQty; i++) {
        row.push({
          position: 0,
          movePosition: j !== 0 ? "-30px" : "30px",
          onBallMove: moveEvent,
        });
      }
      abacusRows.push(row);
    }
    setAbacus(abacusRows);
  }, []);

  const moveEvent = (abacusState, rowNumber, colNumber) => {
    const temp = [...abacusState];
    if (rowNumber !== 0 && abacusState[rowNumber][colNumber].position === 0) {
      for (let i = 1; i <= rowNumber; i++) {
          temp[i][colNumber].position = temp[i][colNumber].movePosition;
      }
    } else if(rowNumber !== 0 && abacusState[rowNumber][colNumber].position !== 0){
      for (let i = rowNumber; i <= 4; i++) {
        temp[i][colNumber].position = 0;
      }
    }
    if (rowNumber === 0) {
      temp[0][colNumber].position =
        temp[0][colNumber].position === 0 ? temp[0][colNumber].movePosition : 0;
    }
    setAbacus(temp);
  };

  const buildRow = (rowNumber) => {
    if (abacus.length === 0) return;
    return abacus[rowNumber].map((cell, index) => {
      return (
        <TableCell
          key={`abacus-ball-${index}`}
          position={cell.position}
          movePosition={cell.position}
          onBallMove={cell.onBallMove}
          abacus={abacus}
          row={rowNumber}
          col={index}
        />
      );
    });
  };

  const buildSpite = () => {
    const spite = [];
    for (let i = 0; i < rowQty; i++) {
      spite.push(
        <div
          key={`abacus-spita-${i}`}
          className="abacus-spita"
          style={{ left: 62 + i * (62 + 30) }}
        ></div>
      );
    }
    return spite;
  };

  useEffect(() => {
    setSeparatorWidth(abacusContainerRef.current.clientWidth - 30);
  }, [abacusContainerRef.current]);

  return (
    <div className="abacus-container">
      <div className="abacus-separator" style={{ width: separatorWidth }}></div>
      {buildSpite()}
      <table ref={abacusContainerRef}>
        <thead></thead>
        <tbody>
          <tr>{buildRow(0)}</tr>
          <tr className="abacus-space border-bottom"></tr>
          <tr className="abacus-separator-row">{middlePointSeparator}</tr>
          <tr className="abacus-space"></tr>
          <tr>{buildRow(1)}</tr>
          <tr>{buildRow(2)}</tr>
          <tr>{buildRow(3)}</tr>
          <tr>{buildRow(4)}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Abacus;
