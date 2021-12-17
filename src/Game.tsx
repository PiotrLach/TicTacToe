import React from 'react';
import './index.css';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div/>
        <Board/>
        <div/>
      </div>
    );
  }
}

export default Game;
