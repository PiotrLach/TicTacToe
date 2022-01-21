import React from 'react';
import '../index.css';
import { Square } from './Square';
import { Triple } from '../types/Triple';
import { Couple } from '../types/Couple';

export const Row = ({first, second, third}: Triple) => 
    <div className="row">
        {renderSquare(first)}
        {renderSquare(second)}
        {renderSquare(third)}
    </div>

const renderSquare = ({value, handler}: Couple) =>
    <Square value={value} handler={handler}/>;