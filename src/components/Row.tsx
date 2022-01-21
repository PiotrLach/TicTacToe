import React from 'react';
import '../index.css';
import { Square }  from './Square';
import { Triple } from '../types/Triple';
import { Couple } from '../types/Couple';

export class Row extends React.Component<{triple : Triple}, {}> {

    render() {
        const triple = this.props.triple;
        return (
            <div className="row">
                {this.renderSquare(triple.first)}
                {this.renderSquare(triple.second)}
                {this.renderSquare(triple.third)}
            </div>
        );
    }

    private renderSquare(couple: Couple) {
        const value = couple.value;
        const handler = couple.handler;
        return <Square value={value} handler={handler}/>;
    }
}