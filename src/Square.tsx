import React from 'react';
import Couple from './Couple';
import './index.css';

class Square extends React.Component<{couple : Couple}, {}> {

  render() {
    return (
      <button className="square" onClick={this.props.couple.handler}>
        {this.props.couple.value}
      </button>
    );
  }
}

export default Square;
