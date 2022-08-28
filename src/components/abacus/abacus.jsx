import { useEffect, useRef, useState } from "react";
import TableCell from '../tableCell/tableCell';
import "./abacus.css";

const Abacus = ({ rowQty = 15 }) => {
  const [separatorWidth, setSeparatorWidth] = useState(0);
  const abacusContainerRef = useRef();
  const middlePointSeparator = new Array(rowQty)
    .fill(null)
    .map((elem, index) => (
      <td key={index}>
        {index === Math.floor(rowQty/2) && (
          <div className="point">
            <div />
          </div>
        )}
      </td>
    ));

  const buildRow = (ballType) => {
    const row = [];
    for (let i = 0; i < rowQty; i++) {
      row.push(
       <TableCell key={`abacus-ball-${i}`} movePosition={ballType === 'soldier' ? '-30px' : '30px'}/>
      );
    }
    return row;
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
    console.dir(abacusContainerRef);
    setSeparatorWidth(abacusContainerRef.current.clientWidth - 30);
  }, [abacusContainerRef]);

  return (
    <div className="abacus-container">
      <div className="abacus-separator" style={{ width: separatorWidth }}></div>
      {buildSpite()}
      <table ref={abacusContainerRef}>
        <thead></thead>
        <tbody>
          <tr>{buildRow('queen')}</tr>
          <tr className="abacus-space border-bottom"></tr>
          <tr className="abacus-separator-row">{middlePointSeparator}</tr>
          <tr className="abacus-space"></tr>
          <tr>{buildRow('soldier')}</tr>
          <tr>{buildRow('soldier')}</tr>
          <tr>{buildRow('soldier')}</tr>
          <tr>{buildRow('soldier')}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Abacus;
