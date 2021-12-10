import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.jsx';

var gameIndex = {
    root : document.getElementById('root')
}

ReactDOM.render(<Game />, gameIndex.root);
