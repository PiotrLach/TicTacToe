import '../index.css';
import { Row } from './Row';
import { Triple } from '../types/Triple';
import { VictoryChecker } from '../VictoryChecker';

const squares = Array(9).fill("");
const victoryChecker = new VictoryChecker(squares);
let isXnext = true;

export const Board = () =>
  <div className="board">
    {renderRow(getTriple(0, 1, 2))}
    {renderRow(getTriple(3, 4, 5))}
    {renderRow(getTriple(6, 7, 8))}
  </div>;

const renderRow = ({ first, second, third }: Triple) =>
  <Row first={first} second={second} third={third} />;

const getTriple = (a: number, b: number, c: number) => ({
  first: getCouple(a), second: getCouple(b), third: getCouple(c)
});

const getCouple = (index: number) => ({
  value: squares[index],
  handler: () => handleClick(index)
});

const handleClick = (index: number): string => {

  const isGameOver = victoryChecker.isGameOver();
  const currentCharacter = isXnext ? 'O' : 'X';

  if (isGameOver) {
    alert(`Game over! ${currentCharacter}s won!`)
    return squares[index];
  }

  if (squares[index]) {
    return squares[index];
  }

  return getNextCharacter(index);
}

const getNextCharacter = (index: number) => {

  const nextCharacter = isXnext ? 'X' : 'O';
  squares[index] = nextCharacter;
  isXnext = !isXnext;

  return nextCharacter;
}
