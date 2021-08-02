import React from 'react';
import './number.css';

class Number extends React.Component {
  render() {
    return (<div className="counter">
      <span className="counter__text"> Quantity of books: {this.props.count}</span>
      </div>);
  }
}

export default Number;