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
    let msgStatus = this.props.msg.msgSelected;
    let bkgColor;
    if (msgStatus) bkgColor = '#3498db';
    if (!msgStatus) bkgColor = '#bdc3c7';

    this.state = {
      msgStatus: msgStatus,
      bkgColor: bkgColor
    }      

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect() {
    
    if (this.state.msgStatus){
      console.log(this.state.msgStatus)
      chat.upsert({
        id:this.props.msg.id,
        msgSelected: false
      })
    } else {
      console.log(this.state.msgStatus)
      chat.upsert({
        id:this.props.msg.id,
        msgSelected: true
      })
    }
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
          <SelectedMsg selectMsg={this.handleOnSelect} msgSelected={this.state.selected}/>
        </div>
      </div>
    );
  }
}