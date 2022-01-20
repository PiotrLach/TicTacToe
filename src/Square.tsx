import Couple from './Couple';
import './index.css';

const Square = ({value, handler}: Couple) =>
  <button className="square" onClick={handler}>
    {value}
  </button>;

export default Square;
