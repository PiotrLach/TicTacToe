import React from 'react';
import './index.css';
import Row from './Row.jsx';

class Board extends React.Component {
  renderRow(triple) {
    return <Row triple={triple}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">
          {status}
        </div>
        {this.renderRow([1, 2, 3])}
        {this.renderRow([4, 5, 6])}
        {this.renderRow([7, 8, 9])}
      </div>
    );
  }
}

export default Board;
