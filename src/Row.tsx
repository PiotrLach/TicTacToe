import React from 'react';
import './index.css';
import Square from './Square';
import Triple from './Triple';
import Couple from './Couple';

export default class Row extends React.Component<{triple : Triple}, {}> {

    render() {
        var triple = this.props.triple;
        return (
            <div className="row">
                {this.renderSquare(triple.first)}
                {this.renderSquare(triple.second)}
                {this.renderSquare(triple.third)}
            </div>
        );
    }

    renderSquare(couple : Couple) {
        return <Square couple={couple} />;
    }
}