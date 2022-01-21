import { Couple } from '../types/Couple';
import '../index.css';

export const Square = ({value, handler}: Couple) =>
  <button className="square" onClick={handler}>
    {value}
  </button>;
