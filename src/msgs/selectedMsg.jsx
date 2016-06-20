import React, { Component } from 'react';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages_msgBoard');

export default class SelectedMsg extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    
    this.handleOnSelect = this.handleOnSelect.bind(this);

    this.state = {
      msgSelected: false
    }
  }

  handleOnSelect() {
    let selected = {
        id:this.props.id,
        msgSelected: false
      }

      let unSelected = {
        id:this.props.id,
        msgSelected: true
      }

    let msgSelectionStatus = (this.state.msgSelected) ? selected : unSelected
    
    chat.update(msgSelectionStatus);
    this.setState({
      msgSelected: (!this.state.msgSelected)
    })
  }

  render(){   
    return(
      <button className="btn btn-success"
              onClick={this.props.selectMsg}>O</button>
    )
  }
}


