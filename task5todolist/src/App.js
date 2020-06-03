import React from 'react';

import './App.css';
import Index from './component/Index'





// class EditItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.editing = this.editing.bind(this);
//     this.state = {
//       value: this.props.value
//     }
//     this.change = this.change.bind(this);
//     this.editing2 = this.editing2.bind(this);
//   }
//   editing(event) {
//     let value = event.target.value;
//     let id = this.props.id;
//     this.props.editing(value, id);
//   }
//   change(event) {
//     let value = event.target.value;
//     this.setState({
//       value: value
//     })
//   }
//   editing2(event) {

//     if (event.keyCode === 13) {
//       this.editing(event);
//     }

//   }
//   render() {
//     if (this.props.edit) {
//       return <input autoFocus onBlur={this.editing} onKeyUp={this.editing2} type="text" class="edit" value={this.state.value} onChange={this.change} />;
//     } else {
//       return false;
//     }
//   }
// }

// class Item extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemstyle: '""',
//       edit: false
//     }
//     // this.change = this.change.bind(this);
//   }

//   change() {
//     const hide = 'hide';
//     this.setState({ itemstyle: hide, edit: true });

//   }
//   save(value, id) {
//     const show = 'show';
//     this.setState({ itemstyle: show, edit: false });
//     this.props.editing(value, id);
//   }

//   render() {
//     const value = this.props.value;
//     const id = this.props.id;
//     let chechbox = (
//       <div>
//         <input class="checkbox" type="checkbox" id={id} onClick={() => this.props.changeStatus(id)}></input>
//         <label for={id}></label><span onDoubleClick={() => this.change()}>{value}</span><button class="destory" onClick={() => this.props.destroy(id)}>X</button>
//       </div>);
//     if (this.props.status) {
//       chechbox = (
//         <div>
//           <input class="checkbox" type="checkbox" id={id} onClick={() => this.props.changeStatus(id)} checked></input>
//           <label for={id}></label><span class="completed" onDoubleClick={() => this.change()}>{value}</span><button class="destory" onClick={() => this.props.destroy(id)}>X</button>
//         </div>)
//     }
//     return (
//       <li>
//         <EditItem edit={this.state.edit} value={value} id={id} editing={(value, id) => this.save(value, id)} />
//         <div class={this.state.itemstyle}>
//           {chechbox}
//         </div>
//       </li>
//     )
//   }
// }

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {

//     if (event.keyCode === 13) {
//       this.props.newItem(event.target.value);
//     }

//   }


//   render() {
//     const Input = <input id="new" placeholder="What needs to be done?" onKeyUp={this.handleChange} />
//     return (
//       Input
//     );

//   }
// }


// // class CheckAll extends React.Component{
// //   // <input type="checkbox" id="checkall" ><label for="checkall"></label>
// // }

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       allcompleted: false,
//     }
//     this.calculate = this.calculate.bind(this);
//     this.newItem = this.newItem.bind(this);
//     this.changeStatus = this.changeStatus.bind(this);
//     this.destroy = this.destroy.bind(this);
//     this.editing = this.editing.bind(this);
//     this.checkAll = this.checkAll.bind(this);
//   }

//   newItem(value) {
//     const list = this.state.list.concat([{ value: value, completed: false }]);
//     this.setState({
//       list: list
//     });
//     this.calculate(list);
//     // 同步调用会出错，更改的就还是在里面重新调用吧
//   }
//   changeStatus(id) {
//     let list = this.state.list;
//     list[id].completed = !list[id].completed;
//     this.setState({
//       list: list
//     })
//     this.calculate(list);
//   }
//   destroy(id) {
//     let list = this.state.list;
//     list.splice(id, 1);
//     this.setState({
//       list: list
//     })
//     this.calculate(list);
//   }
//   editing(value, id) {
//     let list = this.state.list;
//     list[id].value = value;
//     this.setState({
//       list: list
//     })
//   }

//   checkAll() {
//     let list = this.state.list;
//     let status = !this.state.allcompleted;
//     for (let i = 0; i < list.length; i++) {
//       list[i].completed = status;
//     }
//     this.setState({
//       list: list,
//       allcompleted: status,
//     })
//   }

//   calculate(list2) {
//     let list = list2 ? list2 : this.state.list;
//     let n = 0;
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].completed === false) {
//         n++;
//       }
//     }
//     this.props.numberOfActive(n);
//   }

//   render() {
//     const list = this.state.list;
//     const showitems = this.props.showitems;
//     let anticompleted;
//     if (showitems === 'completed') {
//       anticompleted = false;
//     } else if (showitems === 'active') {
//       anticompleted = true;
//     }
//     const items = list.map((item, index) => {
//       if (anticompleted !== item.completed) {
//         const value = item.value;
//         return (
//           <Item
//             status={item.completed}
//             value={value}
//             id={index}
//             changeStatus={(id) => this.changeStatus(id)}
//             destroy={(id) => this.destroy(id)}
//             editing={(value, id) => this.editing(value, id)}
//           />
//         )
//       }

//     })
//     let Header = <div><input type="checkbox" id="checkall" onClick={this.checkAll} /><label for="checkall"></label><Input newItem={(value) => this.newItem(value)} /></div>;
//     if (this.state.allcompleted) {
//       Header = <div><input type="checkbox" id="checkall" checked onClick={this.checkAll} /><label for="checkall"></label><Input newItem={(value) => this.newItem(value)} /></div>;
//     }

//     return (
//       <div onClick={() => { this.calculate() }}>
//         {Header}
//         <ul id="list">
//           {items}
//         </ul></div>
//     )
//   }

// }


// class Index extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showitems: 'all',
//       activeitems: 0,
//     }
//     this.changeShow = this.changeShow.bind(this)
//   }

//   changeShow(status) {
//     this.setState({ showitems: status });
//   }

//   numberOfActive(n) {
//     this.setState({ activeitems: n });
//   }
//   render() {
//     return (
//       <div>
//         <header>
//           <h1>todos</h1>

//         </header>
//         <div class="Index">
//           <List showitems={this.state.showitems} numberOfActive={(n) => this.numberOfActive(n)} />

//           <footer class="footer">
//             <div id="sum">{this.state.activeitems} item left</div>
//             <div class="option">

//               <a id="all" onClick={() => this.changeShow('all')}>all</a>
//               <a id="completed" onClick={() => this.changeShow('completed')}>completed</a>
//               <a id="active" onClick={() => this.changeShow('active')}>active</a>
//             </div>

//           </footer></div></div>
//     )

//   }
// }


// ------------------------------------

function App() {
  return (
    <Index />
  );
}

export default App;
