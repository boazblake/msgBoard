import React, { Component } from 'react';
import Moment from 'moment';
import SelectedMsg from './selectedMsg';
import RemoveMsg from './removeMsg';
const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const chat = horizon('messages_msgBoard');

export default class Message extends Component {
  constructor(props){
    super(props);
    let msgStatus = (this.props.msg.msgSelected);
    let bkgColor = (msgStatus) ? '#3498db' : '#bdc3c7';

    this.state = {
      msgStatus: msgStatus,
      bkgColor: bkgColor
    }      

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect() {
    let selected = {
        id:this.props.msg.id,
        msgSelected: false
      }

      let unSelected = {
        id:this.props.msg.id,
        msgSelected: true
      }

    let msgSelectionStatus = (this.state.msgStatus) ? selected : unSelected
    chat.update(msgSelectionStatus);
    this.setState({
      msgStatus: (!this.state.msgStatus)
    })
  }

  render() { 
    let divStyle =  {
      backgroundColor: this.state.bkgColor
    }

    return (
      <div style={divStyle} className="row">
        <div className="col-xs-2 center">
          {this.props.msg.author}
        </div>
        <div className="col-xs-5 center">
          {this.props.msg.text}
        </div>
        <div className="col-xs-3 center">
          { Moment(this.props.msg.date)
            .format('MMM Do YYYY, h:mm:ss a')}
        </div>
        <div className="col-xs-2 center">
          <RemoveMsg id={this.props.msg.id}/>
          <SelectedMsg selectMsg={this.handleOnSelect} msgSelected={this.state.msgStatus}/>
        </div>
      </div>
    );
  }
}