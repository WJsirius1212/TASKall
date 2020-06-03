import React from 'react';

class Input extends React.Component{
  constructor(){

  }

  render(){
    return(
       <input id="new" placeholder="What needs to be done?"></input>
    )

  }
}


class CheckAll extends React.Component{
  // <input type="checkbox" id="checkall" ><label for="checkall"></label>
}

class Item extends React.Component{
  render(){
    

    return(
    <span>{this.props.value}</span>
    )
  }
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <Input/>
    )
  }

}


