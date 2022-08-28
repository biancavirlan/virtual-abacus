import AbacusBall from '../abacusBall/abacusBall';
import './abacus.css';

const Abacus = ({rowQty=15}) => {


    const buildRow = () => {
        const row = []
        for(let i=0; i<=rowQty; i++){
            row.push(<td><AbacusBall /></td>)
        }
        return row;
    }

    return( 
    <div className="abacus-container">
        <table>
            <thead></thead>
            <tbody>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>{buildRow()}</tr>
            </tbody>
        </table>
    </div>
    )
}

export default Abacus;