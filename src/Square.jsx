import React from 'react';
import './index.css';

class Square extends React.Component {

  render() {
    return (
      <button className="square" onClick={this.props.couple.handler}>
        {this.props.couple.value}
      </button>
    );
  }
}

export default Square;
