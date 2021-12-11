import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.jsx';

var root = {
    element : document.getElementById('root')
}

ReactDOM.render(<Game />, root.element);
