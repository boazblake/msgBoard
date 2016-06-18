import React, { Component } from 'react';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages_msgBoard');

export default class RemoveMsg extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    this.handleRemoveMsg = this.handleRemoveMsg.bind(this)
  }

  handleRemoveMsg() {
    console.log(this.props.id)
    let removeTaskId = this.props.id
    chat.remove(removeTaskId).subscribe((removeTaskId) => { console.log('removeTaskId removed>>', removeTaskId) })
  }

  render(){
    return(
      <button className="btn btn-danger"
              onClick={this.handleRemoveMsg}>X</button>
    )
  }
}
