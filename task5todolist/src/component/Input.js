import React from 'react';
import Item from './Item'
import List from './List'
import './index.css';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    if (event.keyCode === 13) {
      this.props.newItem(event.target.value);
    }

  }


  render() {
    const Input = <input id="new" placeholder="What needs to be done?" onKeyUp={this.handleChange} />
    return (
      Input
    );

  }
}

export default Input;