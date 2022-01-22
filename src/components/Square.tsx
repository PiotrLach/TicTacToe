import { Couple } from 'types/Couple';
import 'index.css';
import { useState } from 'react';

export const Square = ({value, handler}: Couple) => {
  
  const [symbol, setSymbol] = useState(value);
  const onClickHandler = () => {setSymbol(handler())};
  
  return <button className="square" onClick={onClickHandler}>
    {symbol}
  </button>;
}