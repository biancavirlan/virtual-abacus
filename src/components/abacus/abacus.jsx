import AbacusBall from '../abacusBall/abacusBall';
import './abacus.css';

const Abacus = ({rowQty=15}) => {

    const middlePointSeparator = new Array(rowQty).fill(null).map((elem, index) => (
    <td key={index}>{index === 7 && <div  className="point"><div/></div>}</td>
    ))

    const buildRow = () => {
        const row = []
        for(let i=0; i<rowQty; i++){
            row.push(<td key={`abacus-ball-${i}`}><AbacusBall /></td>)
        }
        return row;
    }

    const buildSpite = () => {
        const spite = []
        for(let i=0; i<rowQty; i++){
            spite.push(<div className="abacus-spita" style={{left: 62 + i*(62+30)}}></div>)
        }
        return spite;
    }

    return( 
    <div className="abacus-container">
        <div className="abacus-separator" style={{width: 950 + (30*rowQty)}}></div>
        {buildSpite()}
        <table>
            <thead></thead>
            <tbody>
                <tr>{buildRow()}</tr>
                <tr className="abacus-space border-bottom"></tr>
                <tr className="abacus-separator-row">
                    {middlePointSeparator}
                </tr>
                <tr className="abacus-space"></tr>
                <tr>{buildRow()}</tr>
                <tr>{buildRow()}</tr>
                <tr>{buildRow()}</tr>
                <tr>{buildRow()}</tr>
            </tbody>
        </table>
    </div>
    )
}

export default Abacus;