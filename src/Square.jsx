import React from 'react';
import './index.css';

class Square extends React.Component {

  render() {
    return (
      <button className="square" onClick={() => this.onClick()}>
        {this.props.couple.value}
      </button>
    );
  }

  onClick() {
    this.props.couple.handler();
  }
}

export default Square;
