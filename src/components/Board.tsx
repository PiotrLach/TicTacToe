import React from 'react';
import '../index.css';
import { Row } from './Row';
import { Couple } from '../types/Couple';
import { Triple } from '../types/Triple';
import { BoardState } from '../types/BoardState';
import { VictoryChecker } from '../VictoryChecker';

export class Board extends React.Component<{}, BoardState> {

  private readonly squares = Array(9).fill("");
  private isXnext = true;
  private readonly victoryChecker = new VictoryChecker(this.squares);

  constructor(props: {}) {
    super(props);

    this.state = {
      squares: this.squares,
      isXnext: this.isXnext
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
    const {first, second, third} = triple;
    return <Row first={first} second={second} third={third} />;
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
    const currentCharacter = this.isXnext ? 'O' : 'X';

    if (isGameOver) {
      alert(`Game over! ${currentCharacter}s won!`)
      return;
    }

    if (this.squares[index]) {
      return;
    }
    
    const nextCharacter = this.isXnext ? 'X' : 'O';
    this.squares[index] = nextCharacter;
    this.isXnext = !this.isXnext;
    
    const newState = this.getNewState();
    this.setState(newState);
  }

  private getNewState(): BoardState {
    return {
      squares: this.squares,
      isXnext: this.isXnext
    };
  }
}
