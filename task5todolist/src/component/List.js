import React from 'react';
import Input from './Input'
import Item from './Item'

import './index.css';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      allcompleted: false,
    }
    this.calculate = this.calculate.bind(this);
    this.newItem = this.newItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.destroy = this.destroy.bind(this);
    this.editing = this.editing.bind(this);
    this.checkAll = this.checkAll.bind(this);
  }

  newItem(value) {
    const list = this.state.list.concat([{ value: value, completed: false }]);
    this.setState({
      list: list
    });
    this.calculate(list);
    // 同步调用会出错，更改的就还是在里面重新调用吧
  }
  changeStatus(id) {
    let list = this.state.list;
    list[id].completed = !list[id].completed;
    this.setState({
      list: list
    })
    this.calculate(list);
  }
  destroy(id) {
    let list = this.state.list;
    list.splice(id, 1);
    this.setState({
      list: list
    })
    this.calculate(list);
  }
  editing(value, id) {
    let list = this.state.list;
    list[id].value = value;
    this.setState({
      list: list
    })
  }

  checkAll() {
    let list = this.state.list;
    let status = !this.state.allcompleted;
    for (let i = 0; i < list.length; i++) {
      list[i].completed = status;
    }
    this.setState({
      list: list,
      allcompleted: status,
    })
  }

  calculate(list2) {
    let list = list2 ? list2 : this.state.list;
    let n = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed === false) {
        n++;
      }
    }
    this.props.numberOfActive(n);
  }

  render() {
    const list = this.state.list;
    const showitems = this.props.showitems;
    let anticompleted;
    if (showitems === 'completed') {
      anticompleted = false;
    } else if (showitems === 'active') {
      anticompleted = true;
    }
    const items = list.map((item, index) => {
      if (anticompleted !== item.completed) {
        const value = item.value;
        return (
          <Item
            status={item.completed}
            value={value}
            id={index}
            changeStatus={(id) => this.changeStatus(id)}
            destroy={(id) => this.destroy(id)}
            editing={(value, id) => this.editing(value, id)}
          />
        )
      }

    })
    let Header = <div><input type="checkbox" id="checkall" onClick={this.checkAll} /><label for="checkall"></label><Input newItem={(value) => this.newItem(value)} /></div>;
    if (this.state.allcompleted) {
      Header = <div><input type="checkbox" id="checkall" checked onClick={this.checkAll} /><label for="checkall"></label><Input newItem={(value) => this.newItem(value)} /></div>;
    }

    return (
      <div onClick={() => { this.calculate() }}>
        {Header}
        <ul id="list">
          {items}
        </ul></div>
    )
  }

}


export default List;