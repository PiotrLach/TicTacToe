import React from 'react';
import './index.css';
import Row from './Row.jsx';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">
          {status}
        </div>
        {this.renderRow(this.getTriple(0, 1, 2))}
        {this.renderRow(this.getTriple(3, 4, 5))}
        {this.renderRow(this.getTriple(6, 7, 8))}
      </div>
    );
  }

  renderRow(triple) {
    return <Row triple={triple} />;
  }

  getTriple(a, b, c) {
    return [this.getCouple(a), this.getCouple(b), this.getCouple(c)];
  }

  getCouple(i) {
    return { value: this.state.squares[i], handler: () => this.handleClick(i) };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }
}

export default Board;
