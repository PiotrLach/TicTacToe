import React from 'react';
import './index.css';
import Square from './Square.jsx';

class Row extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() {
        var triple = this.props.triple;
        return (
            <div className="board-row">
                {this.renderSquare(triple[0])}
                {this.renderSquare(triple[1])}
                {this.renderSquare(triple[2])}
            </div>
        );
    }
}
export default Row;