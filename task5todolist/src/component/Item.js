import React from 'react';
import Input from './Input'
import List from './List'
import './index.css';


class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.editing = this.editing.bind(this);
    this.state = {
      value: this.props.value
    }
    this.change = this.change.bind(this);
    this.editing2 = this.editing2.bind(this);
  }
  editing(event) {
    let value = event.target.value;
    let id = this.props.id;
    this.props.editing(value, id);
  }
  change(event) {
    let value = event.target.value;
    this.setState({
      value: value
    })
  }
  editing2(event) {

    if (event.keyCode === 13) {
      this.editing(event);
    }

  }
  render() {
    if (this.props.edit) {
      return <input autoFocus onBlur={this.editing} onKeyUp={this.editing2} type="text" class="edit" value={this.state.value} onChange={this.change} />;
    } else {
      return false;
    }
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemstyle: '""',
      edit: false
    }
    // this.change = this.change.bind(this);
  }

  change() {
    const hide = 'hide';
    this.setState({ itemstyle: hide, edit: true });

  }
  save(value, id) {
    const show = 'show';
    this.setState({ itemstyle: show, edit: false });
    this.props.editing(value, id);
  }

  render() {
    const value = this.props.value;
    const id = this.props.id;
    let chechbox = (
      <div>
        <input class="checkbox" type="checkbox" id={id} onClick={() => this.props.changeStatus(id)}></input>
        <label for={id}></label><span onDoubleClick={() => this.change()}>{value}</span><button class="destory" onClick={() => this.props.destroy(id)}>X</button>
      </div>);
    if (this.props.status) {
      chechbox = (
        <div>
          <input class="checkbox" type="checkbox" id={id} onClick={() => this.props.changeStatus(id)} checked></input>
          <label for={id}></label><span class="completed" onDoubleClick={() => this.change()}>{value}</span><button class="destory" onClick={() => this.props.destroy(id)}>X</button>
        </div>)
    }
    return (
      <li>
        <EditItem edit={this.state.edit} value={value} id={id} editing={(value, id) => this.save(value, id)} />
        <div class={this.state.itemstyle}>
          {chechbox}
        </div>
      </li>
    )
  }
}


export default Item;