import React from 'react';
import './index.css';
import Row from './Row';
import Couple from './Couple';
import Triple from './Triple';
import BoardState from './BoardState';

class Board extends React.Component<{}, BoardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  render() {
    return (
      <div className="board">
        {this.renderRow(this.getTriple(0, 1, 2))}
        {this.renderRow(this.getTriple(3, 4, 5))}
        {this.renderRow(this.getTriple(6, 7, 8))}
      </div>
    );
  }

  private renderRow(triple: Triple) {
    return <Row triple={triple} />;
  }

  private getTriple(a: number, b: number, c: number): Triple {
    return {
      first: this.getCouple(a),
      second: this.getCouple(b),
      third: this.getCouple(c)
    };
  }

  private getCouple(index: number): Couple {
    return {
      value: this.state.squares[index],
      handler: () => this.handleClick(index)
    };
  }

  private handleClick(index: number): void {
    const squares = this.state.squares.slice();
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    const newState = {
      squares: squares,
      xIsNext: !this.state.xIsNext
    };
    this.setState(newState);
  }
}

export default Board;
