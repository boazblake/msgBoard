import React, { Component } from 'react';

export default class ChatContainer extends React.Component {
  constructor(props){
    super(props);
    this.sendMessage = props.sendMessage;
    this.handleChangeAuthor = props.handleChangeAuthor;
    this.handleChangeText = props.handleChangeText
  }
  render(){
    return (
      <form>
        <div className="center">
          <input onChange={this.handleChangeAuthor} placeholder="Name"/>
          <input onChange={this.handleChangeMessage} placeholder="Message"/>
          <button className="btn btn-default"
                  onClick={this.handleSendMessage}>Send a Message</button>
        </div>
      </form>
    )
  }
}