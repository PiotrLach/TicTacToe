import React from 'react';
import './index.css';
import Row from './Row';
import Couple from './Couple';
import Triple from './Triple';
import BoardState from './BoardState';
import VictoryChecker from './VictoryChecker';

class Board extends React.Component<{}, BoardState> {

  private readonly squares: Array<string>;
  private xIsNext: boolean;
  private readonly victoryChecker: VictoryChecker;

  constructor(props: {}) {
    super(props);

    this.squares = Array(9).fill("");
    this.xIsNext = true;
    this.victoryChecker = new VictoryChecker(this.squares);

    this.state = {
      squares: this.squares,
      xIsNext: this.xIsNext
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

    const isGameOver = this.victoryChecker.isGameOver();
    const currentCharacter = this.xIsNext ? 'O' : 'X';

    if (isGameOver) {
      alert("Game over! " + currentCharacter + "s won!")
      return;
    }

    if (this.squares[index]) {
      return;
    }
    
    const nextCharacter = this.xIsNext ? 'X' : 'O';
    this.squares[index] = nextCharacter;
    this.xIsNext = !this.xIsNext;
    
    const newState = this.getNewState();
    this.setState(newState);
  }

  private getNewState(): BoardState {
    return {
      squares: this.squares,
      xIsNext: this.xIsNext
    };
  }
}

export default Board;
