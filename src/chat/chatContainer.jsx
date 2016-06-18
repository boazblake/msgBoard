import React, { Component } from 'react';

export default class ChatContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleSendMessage = this.props.sendMessage;
    this.handleChangeAuthor = this.props.changeAuthor;
    this.handleChangeText = this.props.changeText
  }
  render(){
    return (
      <form>
        <div className="center">
          <input onChange={this.handleChangeAuthor} placeholder="Name"/>
          <input onChange={this.handleChangeText} placeholder="Message"/>
          <button className="btn btn-default"
                  onClick={this.handleSendMessage}>Send a Message</button>
        </div>
      </form>
    )
  }
}