import React from 'react';
import Input from './Input'
import Item from './Item'
import List from './List'
import './index.css';
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showitems: 'all',
      activeitems: 0,
    }
    this.changeShow = this.changeShow.bind(this)
  }

  changeShow(status) {
    this.setState({ showitems: status });
  }

  numberOfActive(n) {
    this.setState({ activeitems: n });
  }
  render() {
    return (
      <div>
        <header>
          <h1>todos</h1>

        </header>
        <div class="main">
          <List showitems={this.state.showitems} numberOfActive={(n) => this.numberOfActive(n)} />

          <footer class="footer">
            <div id="sum">{this.state.activeitems} item left</div>
            <div class="option">

              <a id="all" onClick={() => this.changeShow('all')}>all</a>
              <a id="completed" onClick={() => this.changeShow('completed')}>completed</a>
              <a id="active" onClick={() => this.changeShow('active')}>active</a>
            </div>

          </footer></div></div>
    )

  }
}


export default Index;